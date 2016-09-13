

import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { ListContainer } from "meteor/utilities:react-list-container";
import Posts from "meteor/nova:posts";
import Users from 'meteor/nova:users';
import { Link } from 'react-router';




const TruUsersProfile = ({user}, {currentUser}) => {

  const twitterName = Users.getTwitterName(user);

  const terms = {view:"userPosts", userId: user._id};
  const {selector, options} = Posts.parameters.get(terms);

  return (
    <div className="page users-profile">
      <Telescope.components.HeadTags url={Users.getProfileUrl(user, true)} title={Users.getDisplayName(user)} description={user.telescope.bio} />
      <h2 className="page-title">{Users.getDisplayName(user)}</h2>
      <p>{user.telescope.bio}</p>
      <ul>
        {twitterName ? <li><a href={"http://twitter.com/" + twitterName}>@{twitterName}</a></li> : null }
        {user.telescope.website ? <li><a href={user.telescope.website}>{user.telescope.website}</a></li> : null }
        <Telescope.components.CanDo document={user} action="users.edit">
          <li><Link to={Users.getEditUrl(user)}><FormattedMessage id="users.edit_account"/></Link></li>
        </Telescope.components.CanDo>
      </ul>
      <div>
        { /* ✅ start tru.vote custom */ }
        
        <Telescope.components.SubscribeTo document={user} documentType="users" />

        { /* ✅ end tru.vote custom */ }
      </div>
      <h3><FormattedMessage id="users.posts"/></h3>
      <ListContainer
        collection={Posts}
        publication="posts.list"
        terms={terms}
        selector={selector}
        options={options}
        joins={Posts.getJoins()}
        cacheSubscription={false}
        component={Telescope.components.PostsList}
        componentProps={{
          showHeader: false,
          // ✅ start tru.vote custom 
          
          showTotalVotes: true,

          // ✅ end tru.vote custom 
        }}
        listId="posts.list.user"
      />
    </div>
  )
}

TruUsersProfile.propTypes = {
  user: React.PropTypes.object.isRequired,
}

TruUsersProfile.contextTypes = {
  currentUser: React.PropTypes.object
}

TruUsersProfile.displayName = "TruUsersProfile";

module.exports = TruUsersProfile;