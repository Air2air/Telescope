import Telescope from 'meteor/nova:lib';
import rp from 'request-promise';
import md5 from 'md5';

// default value for test purpose
const dexiOptions = (runId) => ({
  uri: `https://api.dexi.io/runs/${runId}/latest/result`,
  headers: {
    'X-DexiIO-Access': md5(Telescope.settings.get('dexiAccount') + Telescope.settings.get('dexiApiKey')),
    'X-DexiIO-Account': Telescope.settings.get('dexiAccount'),
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  json: true,
});

// fetch dexi endpoint and return the raw results
const runRequest = (runId) => rp(dexiOptions(runId)).then(results => results);

// execution test
// testDexi = () => {
//   console.log('// fetch dexi run latest results..');
//   rp(dexiOptions('e0958483-ce54-4038-8341-597f241414ce'))
//     .then(results => {
//       console.log(results)
//     })
//     .catch(e => {
//       console.log('e', e)
//     });
// }

// testDexi();

export default runRequest;