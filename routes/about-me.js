const express = require('express');
const path = require('path');
const router = express.Router();
const app= express();

router.get('/about-me', (req, res) => {
    res.render('about-me');
});


module.exports = router;
