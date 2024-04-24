const User = require('../models/users');
const logger = require('../utils/logger');
// You can implement your helper functions here
const sendOTP = async (email) => {
  // Your logic to send OTP via email
  // This function should handle sending the OTP to the provided email address
  // You might use a third-party service or your own email sending logic
  logger.info(`Sending OTP to ${email}`);
};

const createUser = async (firstname, lastname, username, email, password) => {
  const user = await User.create({
    firstname,
    lastname,
    username,
    email,
    password,
  });
  return user;
};

const isUserVerified = async () => true;
module.exports = { sendOTP, createUser, isUserVerified };
