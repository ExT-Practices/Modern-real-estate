const db = require('../config/db');

exports.addCategory = async (req, res) => {
    try {
        const { name, slug, description } = req.body;
        const [result] = await db.execute('CALL sp_add_category(?, ?, ?)', [name, slug, description]);
        res.status(201).json({ message: "Category added", categoryId: result[0][0].category_id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCategories = async (req, res) => {
    try {
        const [rows] = await db.execute('CALL sp_get_categories()');
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addProperty = async (req, res) => {
    try {
        const { category_id, title, price, location, bedrooms, bathrooms, area_sqft, description, images_json, status } = req.body;
        const [result] = await db.execute('CALL sp_add_property(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            category_id, title, price, location, bedrooms, bathrooms, area_sqft, description, JSON.stringify(images_json), status
        ]);
        res.status(201).json({ message: "Property added", propertyId: result[0][0].property_id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllProperties = async (req, res) => {
    try {
        const [rows] = await db.execute('CALL sp_get_all_properties()');
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addBlog = async (req, res) => {
    try {
        const { admin_id, title, slug, content, image_url, status } = req.body;
        const [result] = await db.execute('CALL sp_add_blog(?, ?, ?, ?, ?, ?)', [
            admin_id, title, slug, content, image_url, status
        ]);
        res.status(201).json({ message: "Blog added", blogId: result[0][0].blog_id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBlogs = async (req, res) => {
    try {
        const [rows] = await db.execute('CALL sp_get_published_blogs()');
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};