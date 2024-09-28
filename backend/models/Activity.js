const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    distance: { type: Number, required: true }, // in kilometers
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Activity', ActivitySchema);
