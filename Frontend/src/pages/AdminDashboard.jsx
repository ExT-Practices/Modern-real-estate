import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('categories');
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: '', slug: '', description: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetchCategories();
    }
  }, [navigate]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/categories');
      setCategories(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/categories', newCategory);
      setNewCategory({ name: '', slug: '', description: '' });
      fetchCategories();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li 
            className={activeTab === 'categories' ? 'active' : ''} 
            onClick={() => setActiveTab('categories')}
          >
            Categories
          </li>
          <li 
            className={activeTab === 'properties' ? 'active' : ''} 
            onClick={() => setActiveTab('properties')}
          >
            Properties
          </li>
          <li 
            className={activeTab === 'blogs' ? 'active' : ''} 
            onClick={() => setActiveTab('blogs')}
          >
            Blogs
          </li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="main-content">
        {activeTab === 'categories' && (
          <div>
            <h3>Manage Categories</h3>
            <form className="admin-form" onSubmit={handleCategorySubmit}>
              <input 
                type="text" 
                placeholder="Category Name" 
                value={newCategory.name} 
                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })} 
                required 
              />
              <input 
                type="text" 
                placeholder="Slug (e.g. farm-vila)" 
                value={newCategory.slug} 
                onChange={(e) => setNewCategory({ ...newCategory, slug: e.target.value })} 
                required 
              />
              <input 
                type="text" 
                placeholder="Description" 
                value={newCategory.description} 
                onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })} 
                required 
              />
              <button type="submit">Add Category</button>
            </form>
            
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Slug</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((cat) => (
                    <tr key={cat.category_id}>
                      <td>{cat.category_id}</td>
                      <td>{cat.name}</td>
                      <td>{cat.slug}</td>
                      <td>{cat.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'properties' && <h3>Properties Management Coming Soon</h3>}
        {activeTab === 'blogs' && <h3>Blogs Management Coming Soon</h3>}
      </div>
    </div>
  );
};

export default AdminDashboard;