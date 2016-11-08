import moment from 'moment';
import toMarkdown from 'to-markdown';
import { Meteor } from 'meteor/meteor';
import Telescope from 'meteor/nova:lib';
import Users from 'meteor/nova:users';
import Posts from 'meteor/truvote-posts';

import dexiRequest from './requests.js';
import data from './mocks.js';

const dexiCron = async function() {
  try {
    // find all the users with a "dexi run id"
    const organizationsWithDexi = Users.find({dexi: {$exists: true}}).fetch();

    // loop over each to import new posts if existing
    if (organizationsWithDexi.length) {

      const dexiRuns = organizationsWithDexi.map(org => org.dexi);
      const orgIds = organizationsWithDexi.map(org => org._id);

      let results = [];

      for (let run of dexiRuns) {
        results.push(await dexiRequest(run));
      }

      // an entry looks like { headers: [url, date, title, body, image], rows: [ {...}, {...}, .. ] }
      results.map((entry, index) => {
        
        // destructuration for ease of use
        const { headers, rows } = entry;

        // create a REGULAR header schema... [url, date, title, body, image]
        let headersIndex = {};
        headersIndex.url = headers.indexOf('url'); 
        headersIndex.date = headers.indexOf('date');
        headersIndex.title = headers.indexOf('title'); 
        headersIndex.body = headers.indexOf('body'); 
        headersIndex.image = headers.indexOf('image'); 
        
        // one of the required header was missing *IN THE DEXI's DEFINITION* of the result, abort.
        if (_.contains(headersIndex, -1)) {
          console.log("// Dexi Config Warning - One of the required header was missing *IN THE DEXI's DEFINITION* of the result");
          console.log('')
          console.log("Headers defined:", headers);
          console.log("Missing headers are marked as `-1`:", headersIndex);
          
          const wrongUser = Users.getUser(orgIds[index]);
          const displayName = Users.getDisplayName(wrongUser);

          console.log("Username / Run:", displayName, "/", dexiRuns[index]);
        }
        
        rows.map(post => {
          // extract url - if it doesn't exist, create a fake one
          const url = post[headersIndex.url];

          // assign an abritrary date because it's not formatted by now and often null
          const postedAt = new Date();

          // extract title - remove any "go to new line" and replace &amp; by & in the title then trim it
          const title = post[headersIndex.title] ? post[headersIndex.title].replace(/\n/gi, "").replace(/&amp;/gi, "&").trim() : `no title defined for this dexi run - will cause errors` ;
          
          // extract body
          let body = post[headersIndex.body] ? toMarkdown(post[headersIndex.body]) : "";
          // a post body cannot exceed 3000 characters
          if (body.length > 3000)
            body = body.substring(0, 2999);

          // extract image
          const thumbnailUrl = post[headersIndex.image] ? post[headersIndex.image] : undefined;

          return {
            url,
            postedAt,
            title,
            body,
            thumbnailUrl,
            userId: orgIds[index],
          };
        }).map(post => {
          if (!Posts.findOne({title: post.title})) {
            try {
              Posts.methods.new(post);
            } catch (error) {
              // catch errors so it doesn't stop the loop
              console.log('error on insert', error);
            }
          } else {
            console.log('Item already existing');
          }
        });
      });
    } else {
      console.log('No organization with a dexi run!');
    }
  } catch(e) {
    console.log('// error in cron\n', e);
  }
};

// running on server start for test purpose
dexiCron();

SyncedCron.add({
  name: 'fetchDexi',
  schedule: function(parser) {
    return parser.text('at 01:00 am');
  }, 
  job: function() {
    if (!!Telescope.settings.get("dexiAccount") && !!Telescope.settings.get("dexiApiKey")) {
      console.log("// Running dexi cron…")
      dexiCron();
    }
  }
});

