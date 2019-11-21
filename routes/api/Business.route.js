const express = require('express');

const router = express.Router();

router.get('/business', (req, res) => {
    res.send('Business');
});

module.exports = router;