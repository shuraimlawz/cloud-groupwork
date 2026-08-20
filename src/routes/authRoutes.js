const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');
require('dotenv').config();

// REGISTER - Create new account
router.post('/register', async (req, res) => {
    const { full_name, student_id, email, password } = req.body;

    // Check if user exists
    const [existing] = await pool.query(
        'SELECT * FROM users WHERE email = ? OR student_id = ?',
        [email, student_id]
    );
    
    if (existing.length > 0) {
        return res.status(409).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const [result] = await pool.query(
        `INSERT INTO users (full_name, student_id, email, password_hash) 
         VALUES (?, ?, ?, ?)`,
        [full_name, student_id, email, hashedPassword]
    );

    // Generate JWT token
    const token = jwt.sign(
        { userId: result.insertId, email, role: 'student' },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );

    res.status(201).json({ 
        message: 'Registration successful',
        token,
        user: { id: result.insertId, full_name, email, student_id }
    });
});

// LOGIN - Sign in
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Find user
    const [users] = await pool.query(
        'SELECT * FROM users WHERE email = ?',
        [email]
    );

    if (users.length === 0) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = users[0];
    
    // Check password
    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign(
        { userId: user.user_id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );

    res.json({
        message: 'Login successful',
        token,
        user: {
            id: user.user_id,
            full_name: user.full_name,
            email: user.email,
            student_id: user.student_id
        }
    });
});

module.exports = router;
