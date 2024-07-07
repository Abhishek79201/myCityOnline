const { mongoose } = require("../utils/dbConfig");

const reminderSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxlength: 255,
        },
        description: {
            type: String,
            maxlength: 1000,
            default: null,
        },
        dueDate: {
            type: Date,
            default: null,
        },
        isCompleted: {
            type: Boolean,
            default: false,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        assignedTo: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }],
        room: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room',
            default: null,
        },
        priority: {
            type: String,
            enum: ['low', 'medium', 'high'],
            default: 'medium',
        },
        tags: [{
            type: String,
            maxlength: 50,
        }],
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
);

const Reminder = mongoose.model('Reminder', reminderSchema);
module.exports = Reminder;
