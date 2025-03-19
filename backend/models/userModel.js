const db = require('../config/firebase');

class User {
  // Add a new user
  static async addUser(name, birthday, birthTime, birthPlace, phoneNumber, email, description) {
    const userRef = await db.collection('users').add({
      name,
      birthday,
      birthTime,
      birthPlace,
      phoneNumber,
      email,
      description,
      createdAt: new Date().toISOString(),
    });
    return userRef.id;
  }

  // Get all users
  static async getUsers() {
    const snapshot = await db.collection('users').get();
    const users = [];
    snapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    return users;
  }

  // Update user data
  static async updateUser(id, name, birthday, birthTime, birthPlace, phoneNumber, email, description) {
    await db.collection('users').doc(id).update({
      name,
      birthday,
      birthTime,
      birthPlace,
      phoneNumber,
      email,
      description,
      updatedAt: new Date().toISOString(),
    });
  }

  // Delete user data
  static async deleteUser(id) {
    await db.collection('users').doc(id).delete();
  }
}

module.exports = User;