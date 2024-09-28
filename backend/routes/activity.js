const express = require('express');
const Activity = require('../models/Activity');
const User = require('../models/User');
const router = express.Router();

// Add Activity
router.post('/', async (req, res) => {
    const { userId, type, distance } = req.body;
    const newActivity = new Activity({ userId, type, distance });
    await newActivity.save();
    await User.findByIdAndUpdate(userId, { $push: { activities: newActivity._id } });
    res.status(201).json(newActivity);
});

// Get User Activities
router.get('/:userId', async (req, res) => {
    const activities = await Activity.find({ userId: req.params.userId });
    res.json(activities);
});

module.exports = router;
