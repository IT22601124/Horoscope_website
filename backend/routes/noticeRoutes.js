const express = require('express');
const NoticeController = require('../controllers/noticeController');
const router = express.Router();

// Add a new notice
router.post('/', NoticeController.addNotice);

// Get all notices
router.get('/', NoticeController.getNotices);

// Update notice data
router.put('/update-notice/:id', NoticeController.updateNotice);

// Delete notice data
router.delete('/delete-notice/:id', NoticeController.deleteNotice);

module.exports = router;