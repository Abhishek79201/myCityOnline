const { createNewNote } = require("../helper/note");

const createNote = async (data) => {
    try {
        await createNewNote(data);
        return
    } catch (error) {
        throw error;
    }
};

module.exports = { createNote };
