const express = require('express');
const router = express.Router();

const attendenceRoutes = require('./attendenceRoutes');
const authRoutes = require('./authRoutes');

router.use('/auth', authRoutes);

router.use('/attendence', attendenceRoutes);

module.exports = router;
