const profileService = require('../service/profile');

const logger = require('../utils/logger');


const getAllUsers = async (req, res) => {
    try {
        const { searchEmail } = req.body
        const profiles = await profileService.getAllUsers(searchEmail);
        res.status(201).json({
            success: true,
            data: profiles,
        });
    } catch (error) {
        logger.error('Error while fetching profiles:', error);
        res.status(500).json({ status: false, message: 'Internal server error' });
    }
};


module.exports = { getAllUsers };
