import Telescope from 'meteor/nova:lib';
import Posts from 'meteor/truvote-posts';

Posts.views.baseParameters.selector = {
  ...Posts.views.baseParameters.selector,
  location: Telescope.settings.get('truVote').locations[0].value // monkeypatch: give default location, for now
};