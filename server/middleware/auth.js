/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const config = require('../../config');

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

module.exports = { authenticateUser };
