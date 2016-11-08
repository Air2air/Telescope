import Telescope from "meteor/nova:lib";
import Users from 'meteor/nova:users';
import Posts from 'meteor/truvote-posts';

// return the object location of a post { value, label }
Posts.getLocation = (post) => {
  const { locations } = Telescope.settings.get('truVote');

  return locations.find(loc => loc.value === post.location);
};