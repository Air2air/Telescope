import Telescope from 'meteor/nova:lib';
import React from 'react';
import Posts from "meteor/nova:posts";

const PostsPage = ({document, currentUser}) => {
  
  const post = document;
  const htmlBody = {__html: post.htmlBody};

  return (

<div className="posts-page">

<div className="post-header center-text">

  <a id="btn-back" className="col-xs-6 col-sm-3">
      Back Button
  </a>

  <a href="org-parent-link" className="col-xs-6 col-sm-3">
      Ville du Paris
  </a>

  <a href="org-link" className="col-xs-6 col-sm-3">
      Fire Department
  </a>

  <a href="org-author-link" className="col-xs-6 col-sm-3">
      Camille Dunning
  </a>

</div>

<div className="post-image">
    <img src="/assets/images/content/bug.jpg" />
</div>

<h1>
    Post title
</h1>

<div className="post-date">
    14 days ago
</div>

<div className="post-body">
    <p>
        The Project involves construction and operation of one new double-sided outdoor advertising LED billboard on the City-owned pump station property that would be oriented toward traffic along adjacent U.S. 101.
    </p>
</div>

<div className="post-doc">
    <a href="post-doc-link">
        <img src="..." />
    </a>
</div>

<div className="post-vote">
  <div className="post-vote-support">3</div>
  <div className="post-vote-oppose">4</div>
  <div className="post-vote-total">7</div>

  <div className="post-vote-support-new">3</div>
  <div className="post-vote-oppose-new">1</div>
  <div className="post-vote-total-new">4</div>

  <div className="post-vote-user support/oppose/none">0</div>

  <button id="post-vote-support">Support</button>
  <button id="post-vote-oppose">Oppose</button>

  <div className="post-comment-new">4</div>

  <div className="user-votes-support">10</div>
  <div className="user-votes-oppose">17</div>
</div>







      <Telescope.components.HeadTags url={Posts.getLink(post)} title={post.title} image={post.thumbnailUrl} />
      
      {/*<Telescope.components.PostsItem post={post}/>*/}

      {post.htmlBody ? <div className="posts-page-body" dangerouslySetInnerHTML={htmlBody}></div> : null}

      {/*<SocialShare url={ Posts.getLink(post) } title={ post.title }/>*/}

      <Telescope.components.PostsCommentsThread document={post} currentUser={currentUser}/>

    </div>




  )
};

PostsPage.displayName = "PostsPage";

module.exports = PostsPage;
export default PostsPage;