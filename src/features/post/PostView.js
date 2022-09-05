import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostView = () => {
  const { posts, isLoading, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  console.log(posts);
  console.log(isLoading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Posts Fatch using Redux Toolkit and axios </h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostView;
