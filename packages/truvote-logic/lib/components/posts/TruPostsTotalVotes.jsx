import React, { PropTypes, Component } from 'react';
import Telescope from 'meteor/nova:lib';
import Posts from "meteor/nova:posts";

// give total posts votes for the organizations
const TruPostsTotalVotes = (props, context) => {

  // sum up all upvotes
  const totalUpvotes = props.posts.reduce((upvotesTotal, { upvotes }) => upvotesTotal + upvotes, 0);
  
  // sum up all downvotes
  const totalDownvotes = props.posts.reduce((downvotesTotal, { downvotes }) => downvotesTotal + downvotes, 0);
  
  return props.totalCount >= 0 ? (
    <div>
      <p> Considering {props.count} posts displayed on {props.totalCount} total posts, this organization:</p>
      <ul>
        <li>Supports: {totalUpvotes}</li>
        <li>Rejects: {totalDownvotes}</li>
      </ul>
    </div>  
  ) : (<div>Loading stats...</div>);
};
  
TruPostsTotalVotes.propTypes = {
  posts: React.PropTypes.array.isRequired,
  count: React.PropTypes.number,
  totalCount: React.PropTypes.number,
}

TruPostsTotalVotes.contextTypes = {
  currentUser: React.PropTypes.object
};

export default TruPostsTotalVotes;