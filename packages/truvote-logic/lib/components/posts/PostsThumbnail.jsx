import React from 'react';
import Posts from "meteor/nova:posts";

const PostsThumbnail = ({post}) => {
  return (
    <a href={Posts.getLink(post)} target={Posts.getLinkTarget(post)}>
      <img src={Posts.getThumbnailUrl(post)} />
    </a>
  )
}

PostsThumbnail.displayName = "PostsThumbnail";

module.exports = PostsThumbnail;
export default PostsThumbnail;