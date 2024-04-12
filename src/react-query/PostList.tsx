import usePosts from '../hooks/usePosts';
import React from 'react';


const PostList = () => {
  const pageSize = 10;
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } = usePosts({ pageSize: pageSize });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {
          data.pages.map((page) => (
            <React.Fragment>
              {
                page.map(post =>
                  <li key={post.id} className="list-group-item">
                    {post.title}
                  </li>)
              }
            </React.Fragment>
          ))
        }
      </ul>
      <button disabled={isFetchingNextPage} onClick={() => fetchNextPage()} className="btn btn-primary ms-1">
        {isFetchingNextPage ? 'Loading...' : 'Lead More'}</button>
    </>
  );
};

export default PostList;
