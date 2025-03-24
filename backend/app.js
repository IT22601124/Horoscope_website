const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);

const noticeRoutes = require('./routes/noticeRoutes'); // Import notice routes
app.use('/api/notices', noticeRoutes);

const authRoutes = require('./routes/authController'); // Ensure the correct path
app.use('/api/auth', authRoutes);

module.exports = app;