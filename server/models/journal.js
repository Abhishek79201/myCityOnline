const { mongoose } = require("../utils/dbConfig");

const journalSchema = new mongoose.Schema(
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
        tags: [{
            type: String,
            maxlength: 50,
        }],
        isPrivate: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
);

const Journal = mongoose.model('Journal', journalSchema);
module.exports = Journal;
