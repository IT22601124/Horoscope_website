const User = require('../models/userModel');

class UserController {
  // Add a new user
  static async addUser(req, res) {
    try {
      const { name, birthday, birthTime, birthPlace, phoneNumber, email, description } = req.body;

      // Validate input
      if (!name || !birthday || !birthTime || !birthPlace || !phoneNumber || !email || !description) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const userId = await User.addUser(name, birthday, birthTime, birthPlace, phoneNumber, email, description);
      res.status(201).json({ id: userId, message: 'User added successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get all users
  static async getUsers(req, res) {
    try {
      const users = await User.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Update user data
  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, birthday, birthTime, birthPlace, phoneNumber, email, description } = req.body;

      // Validate input
      if (!name || !birthday || !birthTime || !birthPlace || !phoneNumber || !email || !description) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      await User.updateUser(id, name, birthday, birthTime, birthPlace, phoneNumber, email, description);
      res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Delete user data
  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await User.deleteUser(id);
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UserController;