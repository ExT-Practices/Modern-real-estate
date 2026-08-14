const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const publicRoutes = require('./routes/publicRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/public', publicRoutes);
app.delete('/api/admin/properties/:id', async (req, res) => {
    const propertyId = req.params.id;
    const sql = "DELETE FROM properties WHERE property_id = ?";
    db.query(sql, [propertyId], (err, result) => {
        if (err) {
            console.error("Error deleting property:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        res.status(200).json({ message: "Property deleted successfully" });
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});