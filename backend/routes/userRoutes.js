const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();

// Add a new user
router.post('/add-user', UserController.addUser);

// Get all users
router.get('/get-users', UserController.getUsers);

// Update user data
router.put('/update-user/:id', UserController.updateUser);

// Delete user data
router.delete('/delete-user/:id', UserController.deleteUser);

module.exports = router;