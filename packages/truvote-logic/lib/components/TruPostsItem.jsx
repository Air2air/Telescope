import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import Telescope from 'meteor/nova:lib';
import { Link } from 'react-router';
import Posts from "meteor/nova:posts";
import Categories from "meteor/nova:categories";

class TruPostsItem extends Telescope.components.PostsItem {

  render() {

    const post = this.props.post;

    let postClass = "posts-item"; 
    if (post.sticky) postClass += " posts-sticky";

    return (
      <div className={postClass}>
        
      {post.thumbnailUrl ? <Telescope.components.PostsThumbnail post={post}/> : null} 

        <div className="posts-item-content">
          
          <h3 className="posts-item-title">
            <Link to={Posts.getPageUrl(post)} className="posts-item-title-link">
              {post.title}
            </Link>
            {this.renderCategories()}
          </h3>
          
          <div className="posts-item-meta">
            {post.user? <div className="posts-item-user"><Telescope.components.UsersAvatar user={post.user} size="small"/><Telescope.components.UsersName user={post.user}/></div> : null}
            <div className="posts-item-date"><FormattedRelative value={post.postedAt}/></div>
            <div className="posts-item-supports">
             <Telescope.components.TruPostsApprove post={post} />
              <Telescope.components.TruPostsReject post={post} />
            </div>
            {this.renderActions()}
          </div>

        </div>

        {this.renderCommenters()}
        
        <Telescope.components.SubscribeTo document={post} documentType="posts" />
      
      </div>
    )
  }
};
  
TruPostsItem.propTypes = {
  post: React.PropTypes.object.isRequired
}

TruPostsItem.contextTypes = {
  currentUser: React.PropTypes.object
};


export default TruPostsItem;

