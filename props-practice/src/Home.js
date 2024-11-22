import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';

const Home = ({ blogPosts }) => {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {blogPosts.map((post) => (
        <Link
          to={`/blog/${post.id}`}
          key={post.id}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <BlogCard
            title={post.title}
            description={post.description}
            imageURL={post.imageURL}
          />
        </Link>
      ))}
    </div>
  );
};

export default Home;
