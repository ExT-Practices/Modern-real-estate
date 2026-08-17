const express = require('express');
const router = express.Router();
const db = require('../config/db');
const { addCategory, getCategories, addProperty, getAllProperties } = require('../controllers/adminController');

router.post('/categories', addCategory);
router.get('/categories', getCategories);
router.post('/properties', addProperty);
router.get('/properties', getAllProperties);
router.post('/blogs', (req, res) => {
  const { title, image_url, date_author, description } = req.body;
  const sql = "INSERT INTO blogs (title, image_url, date_author, description) VALUES (?, ?, ?, ?)";
  db.query(sql, [title, image_url, date_author, description], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: "Blog added successfully" });
  });
});

router.get('/blogs', (req, res) => {
  const sql = "SELECT * FROM blogs ORDER BY id DESC";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result);
  });
});

router.delete('/blogs/:id', (req, res) => {
  const sql = "DELETE FROM blogs WHERE id = ?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: "Blog deleted successfully" });
  });
});

router.delete('/properties/:id', (req, res) => {
  const sql = "DELETE FROM properties WHERE property_id = ?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: "Property deleted successfully" });
  });
});

module.exports = router;