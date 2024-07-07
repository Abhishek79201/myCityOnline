const Note = require("../models/note");
const User = require("../models/users");

const createNewNote = async (data) => {
    try {
        const note = await newNoteMongoMapper(data);
        const newNote = await Note.create(note);

        await User.findByIdAndUpdate(note.createdBy, {
            $push: { notes: newNote._id }
        });

        if (note.sharedWith)
            await User.findByIdAndUpdate(note.createdBy, {
                $push: { notes: newNote._id }
            });

        return newNote.toJSON();
    } catch (error) {
        throw error;
    }
};


const newNoteMongoMapper = async (data) => {
    const {
        title,
        content,
        tags,
        sharedWith,
        createdBy
    } = data;

    const userObj = {
        title,
        content,
        tags,
        sharedWith,
        createdBy
    };
    return userObj;
};

module.exports = { createNewNote };