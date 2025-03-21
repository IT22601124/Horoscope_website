const db = require('../config/firebase');

class User {
  // Add a new user
  static async addUser(name, birthday, birthTime, birthPlace, phoneNumber, email,address,country,bookingDate,bookingTime, description,nameCat) {
    const userRef = await db.collection('users').add({
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
      nameCat,
      status: 'pending',
  
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
  static async updateUser(id, updates) {
    // Remove fields with undefined values
    Object.keys(updates).forEach((key) => {
      if (updates[key] === undefined) {
        delete updates[key];
      }
    });
  
    // Perform update only if there's at least one valid field to update
    if (Object.keys(updates).length === 0) {
      throw new Error('No valid fields provided for update');
    }
  
    // Check if the user exists
    const userRef = db.collection('users').doc(id);
    const userDoc = await userRef.get();
    if (!userDoc.exists) {
      return null; // User not found
    }
  
    // Update the user
    await userRef.update(updates);
    return { id, ...updates }; // Return updated user data
  }
  

  // Delete user data
  static async deleteUser(id) {
    await db.collection('users').doc(id).delete();
  }
}

module.exports = User;