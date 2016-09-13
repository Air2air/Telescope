import Telescope from "meteor/nova:lib";

const UsersDefaultTruvoteProps = user => {
  // add default props to new user
  user.telescope.groups = ["citizens"];

  const { locations } = Telescope.settings.get('truVote');
  user.location = locations[0].value; // default location : {value: 'belmont', label: 'Belmont, CA'}

  // return user to be inserted
  return user;
};

Telescope.callbacks.add("onCreateUser", UsersDefaultTruvoteProps);

const PostsAssignLocation = (post, user) => {
  // add default props to new user
  post.location = user.location;

  // return post to be inserted
  return post;
};

Telescope.callbacks.add("posts.new.sync", PostsAssignLocation);