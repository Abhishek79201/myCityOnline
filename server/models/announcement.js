const { mongoose } = require("../utils/dbConfig");

const announcementSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxlength: 255,
        },
        content: {
            type: String,
            required: true,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        room: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room',
            required: true,
        },
        isImportant: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
);

const Announcement = mongoose.model('Announcement', announcementSchema);
module.exports = Announcement;
