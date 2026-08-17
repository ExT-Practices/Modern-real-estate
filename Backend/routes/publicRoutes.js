const express = require('express');
const router = express.Router();
const db = require('../config/db');
const { getPropertiesByCategory, addReview, getReviews } = require('../controllers/pubilcController');

router.get('/properties/category/:slug', getPropertiesByCategory);
router.get('/reviews/:property_id', getReviews);
router.post('/reviews', addReview);

router.get('/blogs', (req, res) => {
  const sql = "SELECT * FROM blogs ORDER BY id DESC";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result);
  });
});

module.exports = router;