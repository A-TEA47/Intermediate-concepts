import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import BlogDetails from './BlogDetails';

const App = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Exploring the Mountains",
      description: "Discover the beauty of the untouched landscapes.",
      imageURL: "https://i.natgeofe.com/n/1ac334a0-ac4e-4745-a292-169b0a349e8b/grand-peaks-mount-cook.jpg?w=718&h=479",
      content: "Mountains have always been a source of inspiration and adventure...",
    },
    {
      id: 2,
      title: "A Guide to Healthy Eating",
      description: "Learn how to maintain a balanced diet.",
      imageURL: "https://packmo.lk/wp-content/uploads/2023/02/A-Guide-to-Healthy-Eating.jpg",
      content: "Healthy eating is not about strict limitations or depriving yourself...",
    },
    {
      id: 3,
      title: "Top 10 Travel Destinations",
      description: "Find your next adventure in these amazing locations.",
      imageURL: "https://www.flygrandest.com/wp-content/uploads/2024/11/Top-10-Travel-Destinations-1024x576.jpg",
      content: "Discover some of the most breathtaking travel destinations...",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home blogPosts={blogPosts} />} />
        <Route path="/blog/:id" element={<BlogDetails blogPosts={blogPosts} />} />
      </Routes>
    </Router>
  );
};

export default App;
