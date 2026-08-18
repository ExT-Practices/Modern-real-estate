import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('blogs');
  const [categories, setCategories] = useState([]);
  const [properties, setProperties] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const [newCategory, setNewCategory] = useState({ name: '', slug: '', description: '' });
  
  const [newProperty, setNewProperty] = useState({ category_id: '', title: '', price: '', sqft_options: '' });
  const [propertyImage, setPropertyImage] = useState(null);

  const [newBlog, setNewBlog] = useState({ title: '', date_author: '25 May 2023 | WorkDo', description: '' });
  const [blogImage, setBlogImage] = useState(null);

  const navigate = useNavigate();

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const handleDeleteProperty = async (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/properties/${id}`, getAuthHeaders());
        fetchProperties();
      } catch (err) { console.error(err); }
    }
  };

  const handleDeleteBlog = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/blogs/${id}`, getAuthHeaders());
        fetchBlogs();
      } catch (err) { console.error(err); }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetchCategories();
      fetchProperties();
      fetchBlogs();
    }
  }, [navigate]);

  const fetchCategories = async () => {
    try { const res = await axios.get('http://localhost:5000/api/admin/categories', getAuthHeaders()); setCategories(res.data); } catch (err) { }
  };

  const fetchProperties = async () => {
    try { const res = await axios.get('http://localhost:5000/api/admin/properties', getAuthHeaders()); setProperties(res.data); } catch (err) { }
  };

  const fetchBlogs = async () => {
    try { const res = await axios.get('http://localhost:5000/api/admin/blogs', getAuthHeaders()); setBlogs(res.data); } catch (err) { }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleFileChange = (e, setImageState) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      alert("Please upload only JPG or PNG image formats.");
      e.target.value = ''; 
      setImageState(null);
      return;
    }

    const maxSize = 5 * 1024 * 1024; 
    if (file.size > maxSize) {
      alert("Image size should be less than 5MB.");
      e.target.value = ''; 
      setImageState(null);
      return;
    }

    setImageState(file);
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    try { 
      await axios.post('http://localhost:5000/api/admin/categories', newCategory, getAuthHeaders()); 
      setNewCategory({ name: '', slug: '', description: '' }); 
      fetchCategories(); 
    } catch (err) { }
  };

  const handlePropertySubmit = async (e) => {
    e.preventDefault();
    if (!propertyImage) {
      alert("Please select a property image.");
      return;
    }
    
    try {
      const formData = new FormData();
      formData.append('category_id', newProperty.category_id);
      formData.append('title', newProperty.title);
      formData.append('price', newProperty.price);
      formData.append('description', newProperty.sqft_options);
      formData.append('image', propertyImage); 

      await axios.post('http://localhost:5000/api/admin/properties', formData, getAuthHeaders());
      
      setNewProperty({ category_id: '', title: '', price: '', sqft_options: '' });
      setPropertyImage(null);
      e.target.reset(); 
      fetchProperties();
    } catch (err) { console.error("Error saving property", err); }
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    if (!blogImage) {
      alert("Please select a blog image.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('title', newBlog.title);
      formData.append('date_author', newBlog.date_author);
      formData.append('description', newBlog.description);
      formData.append('image', blogImage); 

      await axios.post('http://localhost:5000/api/admin/blogs', formData, getAuthHeaders());
      
      setNewBlog({ title: '', date_author: '25 May 2023 | WorkDo', description: '' });
      setBlogImage(null);
      e.target.reset(); 
      fetchBlogs();
    } catch (err) { console.error("Error saving blog", err); }
  };

  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li className={activeTab === 'categories' ? 'active' : ''} onClick={() => setActiveTab('categories')}>Categories</li>
          <li className={activeTab === 'properties' ? 'active' : ''} onClick={() => setActiveTab('properties')}>Properties</li>
          <li className={activeTab === 'blogs' ? 'active' : ''} onClick={() => setActiveTab('blogs')}>Blogs</li>
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
                <thead><tr><th>ID</th><th>Name</th><th>Slug</th><th>Description</th></tr></thead>
                <tbody>
                  {categories.map((cat) => {
                    const catId = cat.id || cat.category_id;
                    return (
                      <tr key={catId}><td>{catId}</td><td>{cat.name}</td><td>{cat.slug}</td><td>{cat.description}</td></tr>
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
                <select value={newProperty.category_id} onChange={(e) => setNewProperty({ ...newProperty, category_id: e.target.value })} required>
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
                <input type="text" placeholder="Sq ft Options (e.g. 1800, 1500, 1200)" value={newProperty.sqft_options} onChange={(e) => setNewProperty({ ...newProperty, sqft_options: e.target.value })} required />
                <input 
                  type="file" 
                  accept=".jpg, .jpeg, .png" 
                  onChange={(e) => handleFileChange(e, setPropertyImage)} 
                  required 
                />
              </div>
              <button className="submit-btn" type="submit">Add Property</button>
            </form>
            <div className="data-table">
              <table>
                <thead><tr><th>Title</th><th>Price</th><th>Sq ft Options</th><th>Action</th></tr></thead>
                <tbody>
                  {properties.map((prop) => {
                    const propId = prop.id || prop.property_id;
                    return (
                      <tr key={propId}>
                        <td>{prop.title}</td><td>₹{prop.price}</td><td>{prop.description}</td>
                        <td>
                          <button onClick={() => handleDeleteProperty(propId)} style={{ backgroundColor: '#dc3545', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'blogs' && (
          <div>
            <h3>Manage Blogs</h3>
            <form className="admin-property-form" onSubmit={handleBlogSubmit}>
              <div className="form-row-2">
                <input type="text" placeholder="Blog Title" value={newBlog.title} onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })} required />
                <input 
                  type="file" 
                  accept=".jpg, .jpeg, .png" 
                  onChange={(e) => handleFileChange(e, setBlogImage)} 
                  required 
                />
              </div>
              <div className="form-row-2">
                <input type="text" placeholder="Date & Author" value={newBlog.date_author} onChange={(e) => setNewBlog({ ...newBlog, date_author: e.target.value })} required />
                <input type="text" placeholder="Short Description" value={newBlog.description} onChange={(e) => setNewBlog({ ...newBlog, description: e.target.value })} required />
              </div>
              <button className="submit-btn" type="submit">Add Blog</button>
            </form>
            <div className="data-table">
              <table>
                <thead><tr><th>Title</th><th>Author/Date</th><th>Action</th></tr></thead>
                <tbody>
                  {blogs.map((b, i) => {
                    const blogId = b.id || b.blog_id || i;
                    return (
                      <tr key={blogId}>
                        <td>{b.title}</td>
                        <td>{b.date_author}</td>
                        <td>
                          <button onClick={() => handleDeleteBlog(blogId)} style={{ backgroundColor: '#dc3545', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;