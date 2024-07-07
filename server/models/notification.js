const { mongoose } = require("../utils/dbConfig");

const notificationSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['invite', 'reminder', 'announcement'],
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    fromUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        default: null,
    },
    isRead: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const Notification = mongoose.model('Notification', notificationSchema);
module.exports = Notification;