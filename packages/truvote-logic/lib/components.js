/*
This file centralizes all our custom component overrides. 
*/
import Telescope from 'meteor/nova:lib';

// Posts
import TruPostsApprove from "./components/posts/TruPostsApprove.jsx";
import TruPostsReject from "./components/posts/TruPostsReject.jsx";
import TruPostsTotalVotes from "./components/posts/TruPostsTotalVotes.jsx";
import TruCard from "./components/posts/TruCard.jsx";
import TruPostsList from "./components/posts/TruPostsList.jsx";

// New Post components from Nov. 7
import PostsCategories from "./components/posts/PostsCategories.jsx";
import PostsCommenters from "./components/posts/PostsCommenters.jsx";
import PostsCommentsThread from "./components/posts/PostsCommentsThread.jsx";
import PostsDaily from "./components/posts/PostsDaily.jsx";
import PostsDay from "./components/posts/PostsDay.jsx";
import PostsEditForm from "./components/posts/PostsEditForm.jsx";
import PostsHome from "./components/posts/PostsHome.jsx";
import PostsListHeader from "./components/posts/PostsListHeader.jsx";
import PostsLoading from "./components/posts/PostsLoading.jsx";
import PostsLoadMore from "./components/posts/PostsLoadMore.jsx";
import PostsNewButton from "./components/posts/PostsNewButton.jsx";
import PostsNewForm from "./components/posts/PostsNewForm.jsx";
import PostsNoMore from "./components/posts/PostsNoMore.jsx";
import PostsNoResults from "./components/posts/PostsNoResults.jsx";
import PostsPage from "./components/posts/PostsPage.jsx";
import PostsSingle from "./components/posts/PostsSingle.jsx";
import PostsStats from "./components/posts/PostsStats.jsx";
import PostsThumbnail from "./components/posts/PostsThumbnail.jsx";
import PostsViews from "./components/posts/PostsViews.jsx";

// Common
import AlertDot from "./components/common/AlertDot.jsx";
import TruFooter from "./components/common/TruFooter.jsx";
import TruGauge from "./components/common/TruGauge.jsx";
import Layout from "./components/common/Layout.jsx";
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

// Posts
Telescope.components.TruPostsApprove = TruPostsApprove;
Telescope.components.TruPostsReject = TruPostsReject;
Telescope.components.TruPostsTotalVotes = TruPostsTotalVotes;
Telescope.components.PostsItem = TruCard;
Telescope.components.PostsList = TruPostsList;
Telescope.components.PostsThumbnail = PostsThumbnail;

// New Post components from Nov. 7
Telescope.components.PostsCategories = PostsCategories;
Telescope.components.PostsCommenters = PostsCommenters;
Telescope.components.PostsCommentsThread = PostsCommentsThread;
Telescope.components.PostsDaily = PostsDaily;
Telescope.components.PostsDay = PostsDay;
Telescope.components.PostsEditForm = PostsEditForm;
Telescope.components.PostsHome = PostsHome;
Telescope.components.PostsListHeader = PostsListHeader;
Telescope.components.PostsLoading = PostsLoading;
Telescope.components.PostsLoadMore = PostsLoadMore;
Telescope.components.PostsNewButton = PostsNewButton;
Telescope.components.PostsNewForm = PostsNewForm;
Telescope.components.PostsNoMore = PostsNoMore;
Telescope.components.PostsNoResults = PostsNoResults;
Telescope.components.PostsPage = PostsPage;
Telescope.components.PostsSingle = PostsSingle;
Telescope.components.PostsStats = PostsStats;
Telescope.components.PostsThumbnail = PostsThumbnail;
Telescope.components.PostsViews = PostsViews;

// Common
Telescope.components.AlertDot = AlertDot;
Telescope.components.Footer = TruFooter;
Telescope.components.TruGauge = TruGauge;
Telescope.components.Layout = Layout;
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
