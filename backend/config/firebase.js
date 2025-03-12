const admin = require('firebase-admin');
const serviceAccount = require('./firebase-service-account.json'); // Path to your JSON file

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Export Firestore instance
const db = admin.firestore();
module.exports = db;