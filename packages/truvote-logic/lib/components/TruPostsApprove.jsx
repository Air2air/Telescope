import React from 'react';
import classNames from 'classnames';
import Telescope from 'meteor/nova:lib';
import Users from 'meteor/nova:users';

class TruPostsApprove extends Telescope.components.Vote {
  render() {

    const post = this.props.post;
    const user = this.context.currentUser;

    const hasUpvoted = Users.hasUpvoted(user, post);
    const hasDownvoted = Users.hasDownvoted(user, post);
    const actionsClass = classNames(
      "vote", 
      {voted: hasUpvoted || hasDownvoted},
      {upvoted: hasUpvoted},
      {downvoted: hasDownvoted}
    );

    return (
      <Telescope.components.CanDo action="posts.upvote">
        <div className={actionsClass}>
          <a className="btn btn-sm btn-success" onClick={this.upvote}>
            <div><Telescope.components.Icon name="upvote" /> I Support ({post.upvotes})</div>
          </a>
        </div>
      </Telescope.components.CanDo>
    )
  }
};

export default TruPostsApprove;