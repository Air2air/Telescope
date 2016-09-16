import Telescope from 'meteor/nova:lib';
import Users from 'meteor/nova:users';
import Posts from 'meteor/nova:posts';

import dexiRequest from './requests.js';
import data from './mocks.js';

const dexiCron = () => {

  // find all the users with a "dexi id"
  const organizationsWithDexi = Users.find({dexi: {$exists: true}}).fetch();

  // loop over each to import new posts if existing
  if (organizationsWithDexi.length) {

    organizationsWithDexi.map(org => {
      // FETCH DEXI
      // const results = dexiRequest(org.dexi);

      // should be the results from the dexi request
      const results = data.rows;

      // an entry looks like [url, date, title, body, image]
      const cleanResults = results.map(entry => {
        // extract url
        const url = entry[0];

        // extract date - most of the time 'null', so assign a new one
        const postedAt = new Date();

        // extract title - remove any "go to new line" and replace &amp; by & in the title then trim it
        const title = entry[2].replace(/\n/gi, "").replace(/&amp;/gi, "&").trim();
        
        // extract body
        const body = entry[3];

        // extract image
        const thumbnailUrl = entry[4] ? entry[4] : undefined;

        return {
          url,
          postedAt,
          title,
          body,
          thumbnailUrl,
          userId: org._id,
        };
      }).map(post => {
        if (!Posts.findOne({url: post.url})) {
          try {
            Posts.methods.new(post);
          } catch (error) {
            // catch errors so it doesn't stop the loop
            console.log(error);
          }
        } else {
          console.log('Item already existing');
        }
      });
    });
  } else {
    console.log('No organization with a dexi feed!');
  }
};

// running on server start for test purpose
dexiCron();

SyncedCron.add({
  name: 'fetchDexi',
  schedule: function(parser) {
    return parser.text('every day at 1am');
  }, 
  job: function() {
    if (!!Telescope.settings.get("dexiAccount") && !!Telescope.settings.get("dexiApiKey")) {
      console.log("// Running dexi cron…")
      dexiCron();
    }
  }
});

