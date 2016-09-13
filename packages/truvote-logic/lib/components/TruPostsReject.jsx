import React from 'react';
import classNames from 'classnames';
import Telescope from 'meteor/nova:lib';
import Users from 'meteor/nova:users';

class TruPostsReject extends Telescope.components.Vote {
  constructor() {
    super();
    this.downvote = this.downvote.bind(this);
  }

  downvote(e) {
    e.preventDefault();

    const post = this.props.post;
    const user = this.context.currentUser;

    if(!user){
      this.context.messages.flash("Please log in first");
    } else if (user.hasDownvoted(post)) {
      this.context.actions.call('posts.cancelDownvote', post._id, () => {
        this.context.events.track("post downvote cancelled", {'_id': post._id});
      });        
    } else {
      this.context.actions.call('posts.downvote', post._id, () => {
        this.context.events.track("post downvoted", {'_id': post._id});
      });
    }

  }

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
      <Telescope.components.CanDo action="posts.downvote">
        <div className={actionsClass}>
          <a className="btn btn-sm btn-danger" onClick={this.downvote}>
            <div><Telescope.components.Icon name="downvote" /> I Oppose ({post.downvotes})</div>
          </a>
        </div>
      </Telescope.components.CanDo>
    )
  }
};

export default TruPostsReject;