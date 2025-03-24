const db = require('../config/firebase');
const bcrypt = require('bcryptjs');

class AuthController {
  // Create a new user
  static async createAccount(req, res) {
    try {
      const { email, password } = req.body;

      // Validate input
      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
      }

      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user in Firestore
      const userRef = await db.collection('login').add({
        email,
        password: hashedPassword, // Store the hashed password
        createdAt: new Date().toISOString(),
      });

      return res.status(201).json({ message: 'Account created successfully', userId: userRef.id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Login user
  static async login(req, res) {
    try {
      const { email, password } = req.body;

      // Validate input
      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
      }

      // Fetch the user from Firestore
      const userSnapshot = await db.collection('login').where('email', '==', email).get();

      if (userSnapshot.empty) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Get the user data
      const userData = userSnapshot.docs[0].data();

      // Compare the provided password with the hashed password
      const isPasswordValid = await bcrypt.compare(password, userData.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      return res.status(200).json({ message: 'Login successful', user: { email: userData.email } });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AuthController;