const express = require('express');
const router = express.Router();
const path = require('path');
const { 
    addCategory, getCategories, 
    addProperty, getAllProperties, deleteProperty,
    addBlog, getBlogs, deleteBlog 
} = require('../controllers/adminController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/jpeg', 'image/png'];
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPG and PNG are allowed.'), false);
    }
};

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    },
    fileFilter: fileFilter
});

/**
 * @swagger
 * /api/admin/categories:
 *   post:
 *     tags: [Admin]
 *     summary: Add a new category
 *     responses:
 *       201:
 *         description: Category added successfully
 *   get:
 *     tags: [Admin]
 *     summary: Get all categories
 *     responses:
 *       200:
 *         description: Success
 */
router.post('/categories', addCategory);
router.get('/categories', getCategories);

/**
 * @swagger
 * /api/admin/properties:
 *   post:
 *     tags: [Admin]
 *     summary: Add a new property
 *     responses:
 *       201:
 *         description: Property added successfully
 *   get:
 *     tags: [Admin]
 *     summary: Get all properties
 *     responses:
 *       200:
 *         description: Success
 */
router.post('/properties', upload.single('image'), addProperty);
router.get('/properties', getAllProperties);

/**
 * @swagger
 * /api/admin/properties/{id}:
 *   delete:
 *     tags: [Admin]
 *     summary: Delete a property
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Property deleted successfully
 */
router.delete('/properties/:id', deleteProperty);

/**
 * @swagger
 * /api/admin/blogs:
 *   post:
 *     tags: [Admin]
 *     summary: Add a new blog
 *     responses:
 *       201:
 *         description: Blog added successfully
 *   get:
 *     tags: [Admin]
 *     summary: Get all blogs
 *     responses:
 *       200:
 *         description: Success
 */
router.post('/blogs', upload.single('image'), addBlog);
router.get('/blogs', getBlogs);

/**
 * @swagger
 * /api/admin/blogs/{id}:
 *   delete:
 *     tags: [Admin]
 *     summary: Delete a blog
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog deleted successfully
 */
router.delete('/blogs/:id', deleteBlog);

module.exports = router;