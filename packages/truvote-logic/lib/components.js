/*
This file centralizes all our custom component overrides. 
*/
import Telescope from 'meteor/nova:lib';

// New components specific to TruVote
import TruPostsApprove from "./components/TruPostsApprove.jsx";
import TruPostsReject from "./components/TruPostsReject.jsx";
import TruPostsTotalVotes from "./components/TruPostsTotalVotes.jsx";

// Posts
import TruPostsItem from "./components/TruPostsItem.jsx";
import TruPostsList from "./components/TruPostsList.jsx";

// Common
import AlertDot from "./components/common/AlertDot.jsx";
import TruFooter from "./components/common/TruFooter.jsx";
import TruHeader from "./components/common/TruHeader.jsx";
import TruIcon from "./components/common/TruIcon.jsx";
import TruLogo from "./components/common/TruLogo.jsx";
import SearchForm from "./components/common/SearchForm.jsx";

// Users
import UsersAccount from "./components/users/TruUsersAccount.jsx";
import UsersAccountForm from "./components/users/TruUsersAccountForm.jsx";
import UsersAccountMenu from "./components/users/TruUsersAccountMenu.jsx";
import UsersAvatar from "./components/users/TruUsersAvatar.jsx";
import UsersEdit from "./components/users/TruUsersEdit.jsx";
import UsersMenu from "./components/users/TruUsersMenu.jsx";
import UsersName from "./components/users/TruUsersName.jsx";
import UsersProfile from "./components/users/TruUsersProfile.jsx";
import UsersProfileCheck from "./components/users/TruUsersProfileCheck.jsx";
import UsersSingle from "./components/users/TruUsersSingle.jsx";

// New components specific to TruVote
Telescope.components.TruPostsApprove = TruPostsApprove;
Telescope.components.TruPostsReject = TruPostsReject;
Telescope.components.TruPostsTotalVotes = TruPostsTotalVotes;

// Posts
Telescope.components.PostsItem = TruPostsItem;
Telescope.components.PostsList = TruPostsList;

// Common
Telescope.components.AlertDot = AlertDot;
Telescope.components.Footer = TruFooter;
Telescope.components.Header = TruHeader;
Telescope.components.Icon = TruIcon;
Telescope.components.Logo = TruLogo;
Telescope.components.SearchForm = SearchForm;

// Users
Telescope.components.UsersAccount = UsersAccount;
Telescope.components.UsersAccountForm = UsersAccountForm;
Telescope.components.UsersAccountMenu = UsersAccountMenu;
Telescope.components.UsersAvatar = UsersAvatar;
Telescope.components.UsersEdit = UsersEdit;
Telescope.components.UsersMenu = UsersMenu;
Telescope.components.UsersName = UsersName;
Telescope.components.UsersProfile = UsersProfile;
Telescope.components.UsersProfileCheck = UsersProfileCheck;
Telescope.components.UsersSingle = UsersSingle;
