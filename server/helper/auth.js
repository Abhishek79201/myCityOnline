const User = require('../models/users');
const config = require("../../config")
const logger = require('../utils/logger');
const bcrypt = require('bcrypt');
// You can implement your helper functions here
const sendOTP = async (email) => {
  logger.info(`Sending OTP to ${email}`);
};


const activateUser = async (user) => {
  try {
    const result = await User.updateOne(
      { _id: user._id },
      { $set: { account_status: 'active' } }
    );
    return result;
  } catch (error) {
    throw new Error(`Error activating user: ${error.message}`);
  }
};

const isUserExist = async (email) => {
  // Check if email or username already exists
  const userExists = await User.findOne({
    email
  }).lean();

  if (userExists) {
    return userExists
  }
  return null
};

const createUser = async (data) => {
  try {
    const userData = await onboardMongoMapper(data); // Assuming onboardMongoMapper returns a promise
    const user = await User.create(userData); // Assuming User.create returns a promise
    return user.toJSON(); // Convert to JSON before returning
  } catch (error) {
    throw error; // Propagate the error to the caller
  }
};


const onboardMongoMapper = async (data) => {
  const { username, email, password, login_method, googleData } = data;

  const userObj = {
    email: email || (googleData && googleData.email),
    username: login_method === 'google' ? null : username,
    password: login_method === 'google' ? null : await bcrypt.hash(password, parseInt(config.jwt.saltRounds, 10)),
    login_method,
  };

  if (login_method === 'google') {
    userObj.account_status = 'active'; // Default to active since email is verified by Google
    userObj.profile_image = googleData.picture;
    userObj.google_id = googleData.sub;
    userObj.google_profile = {
      first_name: googleData.given_name,
      last_name: googleData.family_name,
      profile_image: googleData.picture,
    };
  }

  return userObj;
};

module.exports = onboardMongoMapper;
const isUserVerified = async () => true;
const googleVerify = (user, payload) => user.email === payload.email;

module.exports = { sendOTP, createUser, isUserExist, isUserVerified, onboardMongoMapper, activateUser, googleVerify };
