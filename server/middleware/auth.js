/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const config = require('../../config');
const User = require('../models/users');



const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - Missing token' });
  }

  jwt.verify(token, config.jwt.tokenSecret, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden - Invalid token' });
    }
    req.user = user;
    next();
    return user;
  });
};
const createJWTUserToken = async (user) => {
  var token = jwt.sign(user, config.jwt.tokenSecret, { expiresIn: config.jwt.tokenExpireTime });
  return token
}
const findUser = async (req, res, next) => {
  const { email, username } = req.body;

  // Check if email or username already exists
  const userExists = await User.findOne({
    $or: [
      { email },
      { username }
    ]
  }, { _id: 1 });

  if (userExists) {
    return res.status(400).json({ status: false, message: 'User already exists' });
  }

  next();
};

module.exports = { authenticateUser, createJWTUserToken, findUser };
