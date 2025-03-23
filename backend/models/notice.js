const db = require('../config/firebase');

class Notice {
  // Add a new notice
  static async addNotice(title, date, description, category) {
    const noticeRef = await db.collection('notices').add({
      title,
      date,
      description,
      category,
      createdAt: new Date().toISOString(),
    });
    return noticeRef.id;
  }

  // Get all notices
  static async getNotices() {
    const snapshot = await db.collection('notices').get();
    const notices = [];
    snapshot.forEach((doc) => {
      notices.push({ id: doc.id, ...doc.data() });
    });
    return notices;
  }

  // Update notice data
  static async updateNotice(id, updates) {
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

    // Check if the notice exists
    const noticeRef = db.collection('notices').doc(id);
    const noticeDoc = await noticeRef.get();
    if (!noticeDoc.exists) {
      return null; // Notice not found
    }

    // Update the notice
    await noticeRef.update(updates);
    return { id, ...updates }; // Return updated notice data
  }

  // Delete notice data
  static async deleteNotice(id) {
    await db.collection('notices').doc(id).delete();
  }
}

module.exports = Notice;