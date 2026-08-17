import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/public/blogs');
        setBlogs(response.data);
      } catch (error) {}
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blog-page-wrapper">
      
      <section className="blog-header-section">
        <div className="blog-header-container">
          <button className="blog-back-btn" onClick={() => navigate('/')}>
            <span className="back-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </span>
            Back to Home
          </button>
          
          <h1 className="blog-page-title">realestate</h1>
          <p className="blog-page-subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
            has been the industry's standard dummy text ever since the 1500s, when an unknown.
          </p>
        </div>
      </section>

      <section className="blog-content-section">
        <div className="blog-content-container">
          <p className="all-blogs-label">ALL BLOGS</p>
          <h2 className="blog-section-title">Realestate</h2>

          <div className="blog-grid">
            {blogs.map((blog, index) => (
              <div className="blog-grid-card" key={index}>
                <div className="blog-grid-img-wrap">
                  <span className="blog-badge">realestate</span>
                  <img src={blog.image_url} alt={blog.title} />
                </div>
                
                <div className="blog-grid-content">
                  <div className="blog-meta">{blog.date_author}</div>
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-desc">{blog.description}</p>
                  
                  <button className="blog-detail-btn">
                    Show full details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="blog-pagination">
            <button className="page-num active-page">1</button>
            <button className="page-num">2</button>
            <button className="page-arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;