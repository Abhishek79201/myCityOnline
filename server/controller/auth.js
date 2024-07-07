const authService = require('./../service/auth');

const logger = require('../utils/logger');


const signUp = async (req, res) => {
  try {
    const { accessToken, isOnBoarded } = await authService.onboardUser(req.body);
    res.status(201).json({
      accessToken, isOnBoarded,
    });
  } catch (error) {
    logger.error('Error during signup:', error);
    res.status(500).json({ status: false, message: 'Internal server error' });
  }
};

const googleAuth = async (req, res) => {
  const { tokenId } = req.body;
  try {
    const { accessToken, isOnBoarded } = await authService.googleAuthService(tokenId);
    res.json({
      success: true,
      data: { accessToken, isOnBoarded },
    });
  } catch (error) {
    logger.error(`Error while google authsd with token ID: ${tokenId}`, error);
    res.json({
      success: false,
      data: null,
      message: (`Invalid Google Token Id`)
    });
  }
};

const emailAuth = async (req, res) => {
  try {
    const { accessToken, isOnBoarded } = await authService.emailAuthService(req.body);
    res.json({
      success: true, data: { accessToken, isOnBoarded }
    });
  } catch (error) {
    res.json({
      success: false,
      data: null,
      message: `${error}`
    });
  }
};

const emailAuthVerify = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const {
      refreshToken,
      accessToken,
      isOnBoarded,
    } = await authService.emailAuthVerifyService({ email, otp });
    res.json({
      refreshToken, accessToken, isOnBoarded,
    });
  } catch (error) {
    logger.error(`Error while verifying OTP for email: ${email}`, error);
    res.status(error.code);
    res.send('Something went wrong');
  }
};

module.exports = { signUp, googleAuth, emailAuth, emailAuthVerify };
