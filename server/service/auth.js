/* eslint-disable no-useless-catch */
const User = require('../models/users');
const { googleVerify, isUserExist, createUser, activateUser } = require('../helper/auth'); // Assuming you'll implement sendOTP function later
const logger = require('../utils/logger');
const { createJWTUserToken } = require('../middleware/auth');
const { OAuth2Client } = require('google-auth-library');
const googleAuthClient = new OAuth2Client();
const bcrypt = require('bcrypt');


const onboardUser = async (data) => {
  try {
    const user = await createUser({ ...data, login_method: "email" });
    const jwtToken = await createJWTUserToken(user);
    return {
      accessToken: jwtToken, isOnBoarded: true
    };
  } catch (error) {
    throw error;
  }
};
const userExist = async (key, value) => {
  try {
    let user = await User.findOne({ [key]: value }, { _id: 1 });

    if (user) {
      return user._id;
    } else {
      return null; // Or handle the case where the user does not exist
    }
  } catch (error) {
    throw error;
  }
};
const googleAuthService = async (tokenID) => {
  try {
    const ticket = await googleAuthClient.verifyIdToken({
      idToken: tokenID,
    });
    const payload = ticket.getPayload();
    let user = await isUserExist(payload.email);
    let isVerified = false;
    if (user) {
      isVerified = googleVerify(user, payload);
      if (!isVerified) throw new Error(`Invalid tokenId: ${tokenID}`);
    }
    if (!user) user = await createUser({ googleData: payload, login_method: "google" });
    const jwtToken = await createJWTUserToken(user);
    return {
      accessToken: jwtToken, isOnBoarded: true
    };
  } catch (error) {
    logger.error(`Error while google auth with token ID: ${tokenID}`, error);
    return
  }
};
const emailAuthService = async (data) => {
  const { email, password } = data;

  try {
    // Fetch user from the database
    const user = await User.findOne({ email }).lean();
    if (!user) {
      throw new Error('User not found');
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const jwtToken = await createJWTUserToken(user);

    return {
      accessToken: jwtToken,
      isOnBoarded: true
    };
  } catch (error) {
    throw error
  }
};
module.exports = { onboardUser, userExist, googleAuthService, emailAuthService };
