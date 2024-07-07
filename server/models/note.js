const { mongoose } = require("../utils/dbConfig");

const noteSchema = new mongoose.Schema(
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
        sharedWith: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }],
        tags: [{
            type: String,
            maxlength: 50,
        }],
        isArchived: {
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

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
