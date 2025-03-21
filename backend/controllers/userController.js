const User = require('../models/userModel');

class UserController {
  // Add a new user
  static async addUser(req, res) {
    try {
      const { 
        name, 
        birthday, 
        birthTime, 
        birthPlace, 
        phoneNumber, 
        email, 
        address, 
        country, 
        bookingDate ,
        bookingTime, 
        description,
        nameCat 

      } = req.body;

   // This will correctly interpret the date as UTC

      // Validate input
      if (
        !name || 
        !birthday || 
        !birthTime || 
        !birthPlace || 
        !phoneNumber || 
        !email || 
        !address || 
        !country || 
        !bookingDate || 
        !bookingTime || 
        !description ||
        !nameCat
      ) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const userId = await User.addUser(
        name, 
        birthday, 
        birthTime, 
        birthPlace, 
        phoneNumber, 
        email, 
        address, 
        country, 
        bookingDate, 
        bookingTime, 
        description, 
        nameCat
      );
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
      const updates = req.body;

      // Ensure at least one field is provided for update
      if (!id) {
        return res.status(400).json({ error: 'User ID is required' });
      }
      if (Object.keys(updates).length === 0) {
        return res.status(400).json({ error: 'At least one field is required to update' });
      }

      const updatedUser = await User.updateUser(id, updates);

      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.status(200).json({ message: 'User updated successfully', user: updatedUser });
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