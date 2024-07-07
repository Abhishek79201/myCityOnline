const { mongoose } = require("../utils/dbConfig");

const roomSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 255,
        },
        type: {
            type: String,
            enum: ['public', 'private'],
            required: true,
        },
        description: {
            type: String,
            maxlength: 500,
            default: null,
        },
        members: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }],
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
);

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;
