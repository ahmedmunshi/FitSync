const express = require('express');
const Challenge = require('../models/Challenge');
const router = express.Router();

// Create a Challenge
router.post('/', async (req, res) => {
    const { title, creatorId, endDate } = req.body;
    const newChallenge = new Challenge({ title, creatorId, endDate });
    await newChallenge.save();
    res.status(201).json(newChallenge);
});

// Get All Challenges
router.get('/', async (req, res) => {
    const challenges = await Challenge.find();
    res.json(challenges);
});

module.exports = router;
