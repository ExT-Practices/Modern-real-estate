const db = require('../config/db');

exports.getPropertiesByCategory = async (req, res) => {
    try {
        const { slug } = req.params;
        const [rows] = await db.execute('CALL sp_get_properties_by_category(?)', [slug]);
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addReview = async (req, res) => {
    try {
        const { property_id, user_id, rating, comment } = req.body;
        const [result] = await db.execute('CALL sp_add_or_update_review(?, ?, ?, ?)', [
            property_id, user_id, rating, comment
        ]);
        res.status(200).json({ message: "Review saved successfully", action: result[0][0].action_type });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getReviews = async (req, res) => {
    try {
        const { property_id } = req.params;
        const [rows] = await db.execute('CALL sp_get_property_reviews(?)', [property_id]);
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};