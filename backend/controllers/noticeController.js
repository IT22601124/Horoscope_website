const Notice = require('../models/notice');

class NoticeController {
  // Add a new notice
  static async addNotice(req, res) {
    try {
      const { title, date, description, category } = req.body;

      // Validate input
      if (!title || !date || !description || !category) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const noticeId = await Notice.addNotice(title, date, description, category);
      res.status(201).json({ id: noticeId, message: 'Notice added successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get all notices
  static async getNotices(req, res) {
    try {
      const notices = await Notice.getNotices();
      res.status(200).json(notices);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Update notice data
  static async updateNotice(req, res) {
    try {
      const { id } = req.params;
      const updates = req.body;

      // Ensure at least one field is provided for update
      if (!id) {
        return res.status(400).json({ error: 'Notice ID is required' });
      }
      if (Object.keys(updates).length === 0) {
        return res.status(400).json({ error: 'At least one field is required to update' });
      }

      const updatedNotice = await Notice.updateNotice(id, updates);

      if (!updatedNotice) {
        return res.status(404).json({ error: 'Notice not found' });
      }

      res.status(200).json({ message: 'Notice updated successfully', notice: updatedNotice });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Delete notice data
  static async deleteNotice(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ error: 'Notice ID is required' });
      }

      await Notice.deleteNotice(id);
      res.status(200).json({ message: 'Notice deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = NoticeController;