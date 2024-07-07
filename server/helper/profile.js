const User = require("../models/users");

const getUsersByEmail = async (searchEmail) => {
    try {
        const users = await User.find({
            email: { $regex: searchEmail, $options: 'i' }
        }, 'email').lean();
        return users.map(user => user.email);
    } catch (error) {
        throw error;
    }
}
module.exports = { getUsersByEmail };
