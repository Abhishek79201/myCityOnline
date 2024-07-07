const noteService = require('./../service/note');

const logger = require('../utils/logger');


const createNote = async (req, res) => {
    try {
        const createdBy = req.user._id
        await noteService.createNote({ ...req.body, createdBy });
        res.status(201).json({
            success: true,
        });
    } catch (error) {
        logger.error('Error during signup:', error);
        res.status(500).json({ status: false });
    }
};

module.exports = { createNote };
