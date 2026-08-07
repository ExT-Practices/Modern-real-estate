const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const db = require('../config/db');
const sendEmail = require('../utils/sendEmail');
require('dotenv').config();

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const [existingUser] = await db.execute('CALL sp_get_user_by_email(?)', [email]);
        
        if (existingUser[0].length > 0) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        const verificationToken = crypto.randomBytes(32).toString('hex');

        await db.execute('CALL sp_register_user(?, ?, ?, ?)', [
            name,
            email,
            passwordHash,
            verificationToken
        ]);

        const verificationUrl = `${process.env.CLIENT_URL}/verify-email?email=${email}&token=${verificationToken}`;
        const emailHtml = `
            <h2>Welcome to Modern Real Estate</h2>
            <p>Click the link below to verify your email address:</p>
            <a href="${verificationUrl}">${verificationUrl}</a>
        `;

        await sendEmail(email, "Verify Your Email - Modern Real Estate", emailHtml);

        res.status(201).json({ 
            message: "User registered successfully. Please check your email for verification link." 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.verifyEmail = async (req, res) => {
    try {
        const { email, token } = req.body;
        const [result] = await db.execute('CALL sp_verify_email(?, ?)', [email, token]);
        const status = result[0][0].status;

        if (status === 1) {
            res.status(200).json({ message: "Email verified successfully" });
        } else {
            res.status(400).json({ message: "Invalid token or email already verified" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const [rows] = await db.execute('CALL sp_get_user_by_email(?)', [email]);
        const user = rows[0][0];

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.is_verified === 0) {
            return res.status(403).json({ message: "Please verify your email before logging in" });
        }

        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user.id, role: user.role, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};