import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('categories');
  const [categories, setCategories] = useState([]);
  const [properties, setProperties] = useState([]);
  
  const [newCategory, setNewCategory] = useState({ name: '', slug: '', description: '' });
  
  const [newProperty, setNewProperty] = useState({
    category_id: '', 
    title: '', 
    price: '', 
    sqft_options: '', 
    image_url: ''
  });

  const navigate = useNavigate();

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetchCategories();
      fetchProperties();
    }
  }, [navigate]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/categories', getAuthHeaders());
      setCategories(res.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  const fetchProperties = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/properties', getAuthHeaders());
      setProperties(res.data);
    } catch (err) {
      console.error("Error fetching properties:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleDeleteProperty = async (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/properties/${id}`, getAuthHeaders());
        fetchProperties(); 
      } catch (err) {
        console.error("Error deleting property:", err);
        alert("error.");
      }
    }
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/categories', newCategory, getAuthHeaders());
      setNewCategory({ name: '', slug: '', description: '' });
      fetchCategories();
    } catch (err) {
      console.error("Error adding category:", err);
    }
  };

  const handlePropertySubmit = async (e) => {
    e.preventDefault();
    try {
      const propertyData = {
        category_id: newProperty.category_id,
        title: newProperty.title,
        price: newProperty.price,
        location: 'N/A', 
        description: newProperty.sqft_options || '1200', 
        bedrooms: 0,
        bathrooms: 0,
        area_sqft: 0,
        status: 'available',
        images_json: newProperty.image_url ? [newProperty.image_url] : ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80"]
      };

      await axios.post('http://localhost:5000/api/admin/properties', propertyData, getAuthHeaders());
      
      setNewProperty({ category_id: '', title: '', price: '', sqft_options: '', image_url: '' });
      fetchProperties();
    } catch (err) {
      console.error("Error adding property:", err);
      alert("Property didn't get added!");
    }
  };

  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li className={activeTab === 'categories' ? 'active' : ''} onClick={() => setActiveTab('categories')}>
            Categories
          </li>
          <li className={activeTab === 'properties' ? 'active' : ''} onClick={() => setActiveTab('properties')}>
            Properties
          </li>
          <li className={activeTab === 'blogs' ? 'active' : ''} onClick={() => setActiveTab('blogs')}>
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
              <input type="text" placeholder="Category Name" value={newCategory.name} onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })} required />
              <input type="text" placeholder="Slug (e.g. farm-vila)" value={newCategory.slug} onChange={(e) => setNewCategory({ ...newCategory, slug: e.target.value })} required />
              <input type="text" placeholder="Description" value={newCategory.description} onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })} required />
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
                  {categories.map((cat) => {
                    const catId = cat.id || cat.category_id;
                    return (
                      <tr key={catId}>
                        <td>{catId}</td>
                        <td>{cat.name}</td>
                        <td>{cat.slug}</td>
                        <td>{cat.description}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'properties' && (
          <div>
            <h3>Manage Properties</h3>
            
            <form className="admin-property-form" onSubmit={handlePropertySubmit}>
              <div className="form-row-3">
                <select 
                  value={newProperty.category_id} 
                  onChange={(e) => setNewProperty({ ...newProperty, category_id: e.target.value })} 
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => {
                    const catId = cat.id || cat.category_id;
                    return (
                      <option key={catId} value={catId}>{cat.name}</option>
                    );
                  })}
                </select>
                <input type="text" placeholder="Property Title" value={newProperty.title} onChange={(e) => setNewProperty({ ...newProperty, title: e.target.value })} required />
                <input type="number" placeholder="Price (INR)" value={newProperty.price} onChange={(e) => setNewProperty({ ...newProperty, price: e.target.value })} required />
              </div>

              <div className="form-row-2">
                <input 
                  type="text" 
                  placeholder="Sq ft Options (e.g. 1800, 1500, 1200)" 
                  value={newProperty.sqft_options} 
                  onChange={(e) => setNewProperty({ ...newProperty, sqft_options: e.target.value })} 
                  required 
                />
                <input 
                  type="text" 
                  placeholder="Image URL Link" 
                  value={newProperty.image_url} 
                  onChange={(e) => setNewProperty({ ...newProperty, image_url: e.target.value })} 
                  required 
                />
              </div>
              
              <button className="submit-btn" type="submit">Add Property</button>
            </form>

            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Sq ft Options</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map((prop) => (
                    <tr key={prop.property_id}>
                      <td>{prop.title}</td>
                      <td>₹{prop.price}</td>
                      <td>{prop.description}</td>
                      <td>
                        <button className="delete-btn" onClick={() => handleDeleteProperty(prop.property_id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'blogs' && <h3>Blogs Management Coming Soon</h3>}
      </div>
    </div>
  );
};

export default AdminDashboard;