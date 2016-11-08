import React from 'react';
import Posts from "meteor/truvote-posts";

const PostsThumbnail = ({post}) => {
  return (
    <a href={Posts.getPageUrl(post)}>
      <img src={Posts.getThumbnailUrl(post)} />
    </a>
  )
}

PostsThumbnail.displayName = "PostsThumbnail";

module.exports = PostsThumbnail;
export default PostsThumbnail;

