const { getUsersByEmail } = require("../helper/profile");

const getAllUsers = async (searchEmail) => {
    try {
        return await getUsersByEmail(searchEmail)
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllUsers };
