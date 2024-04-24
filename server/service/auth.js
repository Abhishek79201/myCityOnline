/* eslint-disable no-useless-catch */
const User = require('../models/users');
const { sendOTP } = require('../helper/auth'); // Assuming you'll implement sendOTP function later
const logger = require('../utils/logger');

const signUpUser = async (firstname, lastname, username, email, password) => {
  try {
    // You can add your logic here, for example, validation, hashing password, etc.
    logger.info(firstname, lastname, username, email, password);
    // Assuming you want to send OTP after creating the user
    await sendOTP(User.email); // Send OTP to the user's email
    return User;
  } catch (error) {
    throw error;
  }
};

module.exports = { signUpUser };
