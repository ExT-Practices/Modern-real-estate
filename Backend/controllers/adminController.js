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
        const { category_id, title, price, description } = req.body;
        const images_json = req.file ? JSON.stringify([`/uploads/${req.file.filename}`]) : null;
        const [result] = await db.execute('CALL sp_add_property(?, ?, ?, ?, ?, ?)', [
            category_id, title, price, description, images_json, 'available'
        ]);
        res.status(201).json({ message: "Property added", propertyId: result[0][0].property_id });
    } catch (error) {
        console.log("=== DATABASE ERROR ===", error);
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

exports.deleteProperty = async (req, res) => {
    try {
        await db.execute('DELETE FROM properties WHERE property_id = ?', [req.params.id]);
        res.status(200).json({ message: "Property deleted successfully" });
    } catch (error) {
        console.error("=== DELETE PROPERTY ERROR ===", error);
        res.status(500).json({ error: error.message });
    }
};

exports.addBlog = async (req, res) => {
    try {
        const { title, date_author, description } = req.body;
        const image_url = req.file ? `/uploads/${req.file.filename}` : null;
        
        const [result] = await db.execute(
            'INSERT INTO blogs (title, image_url, date_author, description) VALUES (?, ?, ?, ?)', 
            [title, image_url, date_author, description]
        );
        
        res.status(201).json({ message: "Blog added successfully", blogId: result.insertId });
    } catch (error) {
        console.log("=== BLOG DATABASE ERROR ===", error);
        res.status(500).json({ error: error.message });
    }
};

exports.getBlogs = async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM blogs ORDER BY id DESC');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        await db.execute('DELETE FROM blogs WHERE id = ?', [req.params.id]);
        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        console.error("=== DELETE BLOG ERROR ===", error);
        res.status(500).json({ error: error.message });
    }
};