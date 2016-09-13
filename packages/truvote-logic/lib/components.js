/*
This file centralizes all our custom component overrides. 
*/
import Telescope from 'meteor/nova:lib';

import TruPostsApprove from "./components/TruPostsApprove.jsx";
import TruPostsReject from "./components/TruPostsReject.jsx";
import TruPostsTotalVotes from "./components/TruPostsTotalVotes.jsx";

import TruPostsItem from "./components/TruPostsItem.jsx";
import TruPostsList from "./components/TruPostsList.jsx";
import TruUsersProfile from "./components/TruUsersProfile.jsx";

// new components
Telescope.components.TruPostsApprove = TruPostsApprove;
Telescope.components.TruPostsReject = TruPostsReject;
Telescope.components.TruPostsTotalVotes = TruPostsTotalVotes;

// replace existing components
// Telescope.components.PostsItem = TruPostsItem;
Telescope.components.PostsList = TruPostsList;
Telescope.components.UsersProfile = TruUsersProfile;