import Telescope from 'meteor/nova:lib';
import rp from 'request-promise';
import md5 from 'md5';

// default value for test purpose
const dexiOptions = (orgId = 'c3bfab0e-f37e-4446-8d1c-1a87e119ce88') => ({
  uri: `https://api.dexi.io/executions/${orgId}/result`,
  headers: {
    'X-DexiIO-Access': md5(Telescope.settings.get('dexiAccount') + Telescope.settings.get('dexiApiKey')),
    'X-DexiIO-Account': Telescope.settings.get('dexiAccount'),
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  json: true,
});

// fetch dexi endpoint and return the raw results
const runRequest = (orgId) => rp(dexiOptions(orgId)).then(results => results);

export default runRequest;