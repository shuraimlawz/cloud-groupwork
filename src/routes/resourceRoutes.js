const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// GET all resources (with search)
router.get('/resources', async (req, res) => {
    const { course, search } = req.query;

    let sql = `
        SELECT r.*, u.full_name as uploader, c.course_code 
        FROM resources r
        JOIN users u ON r.user_id = u.user_id
        JOIN courses c ON r.course_id = c.course_id
        WHERE r.is_active = TRUE
    `;
    const params = [];

    if (course) {
        sql += ` AND c.course_code = ?`;
        params.push(course);
    }
    if (search) {
        sql += ` AND (r.title LIKE ? OR r.description LIKE ?)`;
        params.push(`%${search}%`, `%${search}%`);
    }

    sql += ` ORDER BY r.upload_date DESC`;

    const [rows] = await pool.query(sql, params);
    res.json(rows);
});

// GET single resource
router.get('/resources/:id', async (req, res) => {
    const { id } = req.params;

    const [rows] = await pool.query(
        `SELECT r.*, u.full_name as uploader, c.course_code 
         FROM resources r
         JOIN users u ON r.user_id = u.user_id
         JOIN courses c ON r.course_id = c.course_id
         WHERE r.resource_id = ? AND r.is_active = TRUE`,
        [id]
    );

    if (rows.length === 0) {
        return res.status(404).json({ error: 'Resource not found' });
    }

    res.json(rows[0]);
});

module.exports = router;
