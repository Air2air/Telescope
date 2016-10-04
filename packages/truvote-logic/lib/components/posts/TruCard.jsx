import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import Telescope from 'meteor/nova:lib';
import { Link } from 'react-router';
import Posts from "meteor/nova:posts";
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
        <div className="logo col-xs-3">
          {post.user? <Telescope.components.UsersAvatar user={post.user} /> : null}
        </div>
        <div className="header-text col-xs-8 text-xs-center">
            <div className="dept">
              {post.user? <Telescope.components.UsersName user={post.user}/> : null}
            </div>
            <div className="org">
              City of Belmont
            </div>
        </div>
      </div>
      <div className="card-image">
        {post.thumbnailUrl ? <Telescope.components.PostsThumbnail post={post}/> : null} 
      </div>
      <div className="card-block">
        <div className="card-title">
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
        <div className="card-date">
          <FormattedRelative value={post.postedAt}/>
        </div>
      </div>
      <div className="card-chart">
        <Telescope.components.TruGauge/>
      </div>
      <div className="card-footer">
        <div className="col-xs-6">
          <div className="icon">
            {this.renderCommenters()}
          </div>
        </div>
        <div className="col-xs-6">
          <div className="icon">
            <span className="fa fa-share-alt"></span>
            <span className="value">Shares</span>
          </div>
        </div>
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

