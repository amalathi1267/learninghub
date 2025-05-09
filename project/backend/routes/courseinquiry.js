// backend/routes/enquiry.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/enquiry', (req, res) => {
  const { name, email, phone, message } = req.body;

  const sql = 'INSERT INTO enquiries (name, email, phone, message) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, phone, message], (err, result) => {
    if (err) {
      console.error('❌ Error saving enquiry:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({ success: true, message: 'Enquiry submitted successfully!' });
  });
});

module.exports = router;
