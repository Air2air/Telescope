import Users from 'meteor/nova:users';

// *****************
// Default cannot
// *****************

const defaultCannot = [
  "posts.new",
  "posts.upvote", 
  "posts.cancelUpvote", 
  "posts.downvote",
  "posts.cancelDownvote",
];

Users.groups.default.cannot(defaultCannot);

// *****************
// Citizens
// *****************

Users.createGroup("citizens");

const citizensCan = [
  "posts.upvote", 
  "posts.cancelUpvote", 
  "posts.downvote",
  "posts.cancelDownvote",
];

const citizensCannot = [
  "posts.new",
];

Users.groups.citizens.can(citizensCan); 
Users.groups.citizens.cannot(citizensCannot); 

// *****************
// Organizations
// *****************

Users.createGroup("orgs");

const organizationsCan = [
  "posts.new",
];

const organizationsCannot = [
  "posts.upvote", 
  "posts.cancelUpvote", 
  "posts.downvote",
  "posts.cancelDownvote",
];

Users.groups.orgs.can(organizationsCan); 
Users.groups.orgs.cannot(organizationsCannot); 