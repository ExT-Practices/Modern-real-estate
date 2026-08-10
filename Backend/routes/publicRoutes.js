const express = require('express');
const router = express.Router();
const { getPropertiesByCategory, addReview, getReviews } = require('../controllers/pubilcController');

router.get('/properties/category/:slug', getPropertiesByCategory);
router.get('/reviews/:property_id', getReviews);
router.post('/reviews', addReview);

module.exports = router;