const express = require('express');
const router = express.Router();
const db = require('../config/db');
const { getPropertiesByCategory, addReview, getReviews } = require('../controllers/pubilcController');

/**
 * @swagger
 * /api/public/properties/category/{slug}:
 *   get:
 *     tags: [Public]
 *     summary: Get properties by category slug
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/properties/category/:slug', getPropertiesByCategory);

/**
 * @swagger
 * /api/public/reviews/{property_id}:
 *   get:
 *     tags: [Public]
 *     summary: Get reviews for a specific property
 *     parameters:
 *       - in: path
 *         name: property_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/reviews/:property_id', getReviews);

/**
 * @swagger
 * /api/public/reviews:
 *   post:
 *     tags: [Public]
 *     summary: Add a new review
 *     responses:
 *       201:
 *         description: Review added successfully
 */
router.post('/reviews', addReview);

/**
 * @swagger
 * /api/public/blogs:
 *   get:
 *     tags: [Public]
 *     summary: Get all published blogs
 *     responses:
 *       200:
 *         description: List of all blogs
 *       500:
 *         description: Server error
 */
router.get('/blogs', async (req, res) => {
  const sql = "SELECT * FROM blogs ORDER BY id DESC";
  try {
    const [result] = await db.query(sql);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;