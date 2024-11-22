import React from 'react';
import './BlogCard.css'; 

const BlogCard = ({ title, description, imageURL }) => {
  return (
    <div className="blog-card">
      <img className="blog-card__image" src={imageURL} alt={title} />
      <div className="blog-card__content">
        <h3 className="blog-card__title">{title}</h3>
        <p className="blog-card__description">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
