const admin = require('firebase-admin');
const serviceAccount = require('./firebase-service-account.json'); // Path to your JSON file

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Export Firestore instance
const db = admin.firestore();
console.log('Firebase Admin SDK initialized');

// Test Firestore connection
(async () => {
  try {
    const testCollection = await db.collection('users').get(); // Replace 'users' with your collection name
    //console.log(⁠ Successfully connected to Firestore. Found ${testCollection.size} documents in the 'users' collection. ⁠);
  } catch (error) {
    console.error('Error connecting to Firestore:', error.message);
  }
})();

module.exports = db;