import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import Telescope from 'meteor/nova:lib';
import { Link } from 'react-router';
import Posts from "meteor/truvote-posts";
import Categories from "meteor/nova:categories";



class TruCard extends Telescope.components.PostsItem {

  render() {

    const post = this.props.post;

    //let postClass = "posts-item"; 
    //if (post.sticky) postClass += " posts-sticky";

    return (
  <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
    <div className="card text-xs-center">
      <div className="card-header">
        <div className="org">
          City of Belmont
        </div>
        <div className="dept">
          {post.user? <Telescope.components.UsersName user={post.user}/> : null}
        </div>
      </div>
      <div className="card-image">
        {post.thumbnailUrl ? <Telescope.components.PostsThumbnail post={post}/> : null} 
        <div className="date">
          <FormattedRelative value={post.postedAt}/>
        </div>
      </div>
      <div className="card-block">
        <div className="title">
          <span>
            <Link to={Posts.getPageUrl(post)} className="posts-item-title-link">
              {post.title}
            </Link>
            {this.renderCategories()}
          </span>
        </div>
        {/*}
        <Telescope.components.TruPostsApprove post={post} />
        <Telescope.components.TruPostsReject post={post} />
      */}
      </div>
    </div>
  </div>
    )
  }
};

  
TruCard.propTypes = {
  post: React.PropTypes.object.isRequired
}

TruCard.contextTypes = {
  currentUser: React.PropTypes.object
};


export default TruCard;

