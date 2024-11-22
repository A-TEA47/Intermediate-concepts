import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetails = ({ blogPosts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogPosts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: '20px',
          padding: '10px 20px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          cursor: 'pointer',
        }}
      >
        Go Back
      </button>
      <img
        src={blog.imageURL}
        alt={blog.title}
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <h1 style={{ margin: '20px 0', color: '#333' }}>{blog.title}</h1>
      <p style={{ color: '#555', fontSize: '1.1rem' }}>{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
