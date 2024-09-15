const express = require('express');
const { getProfile } = require('../controller/profileController');
const { protect } = require('../middlewares/authmiddlewares');
const router = express.Router();

router.get('/profile', protect, getProfile);

module.exports = router;
