const { mongoose } = require("../utils/dbConfig");

const pollOptionSchema = new mongoose.Schema(
    {
        optionText: {
            type: String,
            required: true,
            maxlength: 255,
        },
        votes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }],
    }
);

const pollSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
            maxlength: 255,
        },
        options: [pollOptionSchema],
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        room: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room',
            default: null,
        },
        isClosed: {
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

const Poll = mongoose.model('Poll', pollSchema);
module.exports = Poll;
