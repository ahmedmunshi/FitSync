const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, required: true },
});

module.exports = mongoose.model('Challenge', ChallengeSchema);
