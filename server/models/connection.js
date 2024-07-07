const { mongoose } = require("../utils/dbConfig");

const connectionSchema = new mongoose.Schema({
    fromUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    toUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    connectionId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'declined'],
        default: 'pending',
    },
    sharedNotes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note',
    }],
    sharedReminders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reminder',
    }],
    sharedRooms: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Connection = mongoose.model('Connection', connectionSchema);
module.exports = {
    Connection
}