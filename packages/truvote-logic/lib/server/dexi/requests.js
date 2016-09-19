import Telescope from 'meteor/nova:lib';
import rp from 'request-promise';
import md5 from 'md5';

// default value for test purpose
const dexiOptions = (executionId) => ({
  uri: `https://api.dexi.io/executions/${executionId}/result`,
  headers: {
    'X-DexiIO-Access': md5(Telescope.settings.get('dexiAccount') + Telescope.settings.get('dexiApiKey')),
    'X-DexiIO-Account': Telescope.settings.get('dexiAccount'),
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  json: true,
});

// fetch dexi endpoint and return the raw results
const runRequest = (executionId = 'c3bfab0e-f37e-4446-8d1c-1a87e119ce88') => rp(dexiOptions(executionId)).then(results => results);

// execution test
testDexi = () => {
  console.log('// fetch dexi *execution* results..');
  rp(dexiOptions('0e16ef0b-c7ce-4e2b-876b-429b77c74f47'))
    .then(results => {
      console.log(results)
    })
    .catch(e => {
      console.log('e', e)
    });
}

testDexi();

export default runRequest;