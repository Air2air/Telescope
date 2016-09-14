import Telescope from 'meteor/nova:lib';
import React from 'react';

const TruPostsList = ({results, currentUser, hasMore, ready, count, totalCount, loadMore, showHeader = true, showTotalVotes = false}) => {

  // console.log(results);
  // console.log(ready);
  // console.log(hasMore);
  // console.log(totalCount);
  // console.log(count);

  if (!!results.length) {
    return (
      <div className="posts-list">
        {showHeader ? <Telescope.components.PostsListHeader /> : null}

        {
          // ✅ start tru.vote custom 
          
          showTotalVotes ? <Telescope.components.TruPostsTotalVotes posts={results} count={count} totalCount={totalCount} /> : null
          
          // ✅ end tru.vote custom 
        }
        <div className="posts-list-content">
          {results.map(post => <Telescope.components.PostsItem post={post} currentUser={currentUser} key={post._id}/>)}
        </div>
        {hasMore ? (ready ? <Telescope.components.PostsLoadMore loadMore={loadMore} count={count} totalCount={totalCount} /> : <Telescope.components.PostsLoading/>) : <Telescope.components.PostsNoMore/>}
      </div>
    )
  } else if (!ready) {
    return (
      <div className="posts-list">
        {showHeader ? <Telescope.components.PostsListHeader /> : null}
        <div className="posts-list-content">
          <Telescope.components.PostsLoading/>
        </div>
      </div>
    )
  } else {
    return (
      <div className="posts-list">
        {showHeader ? <Telescope.components.PostsListHeader /> : null}
        <div className="posts-list-content">
          <Telescope.components.PostsNoResults/>
        </div>
      </div>
    )  
  }
  
};

TruPostsList.displayName = "TruPostsList";

module.exports = TruPostsList;