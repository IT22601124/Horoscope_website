const express = require('express');
const AuthController = require('../controllers/passwordController');
const router = express.Router();

// Create a new account
router.post('/create-account', AuthController.createAccount);

// Login user
router.post('/login', AuthController.login);

module.exports = router;