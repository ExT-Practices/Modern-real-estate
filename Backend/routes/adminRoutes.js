const express = require('express');
const router = express.Router();
const { addCategory, getCategories, addProperty, getAllProperties, addBlog, getBlogs } = require('../controllers/adminController');

router.post('/categories', addCategory);
router.get('/categories', getCategories);
router.post('/properties', addProperty);
router.get('/properties', getAllProperties);
router.post('/blogs', addBlog);
router.get('/blogs', getBlogs);

module.exports = router;