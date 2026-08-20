const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// GET all courses
router.get('/courses', async (req, res) => {
    const [rows] = await pool.query(
        'SELECT * FROM courses ORDER BY course_code'
    );
    res.json(rows);
});

module.exports = router;