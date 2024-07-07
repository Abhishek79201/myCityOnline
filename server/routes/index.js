const express = require('express');
const authRoutes = require('./auth');
const noteRoutes = require('./note');
const connectionRoutes = require('./connection');
const notificationRoutes = require('./notification');
const profileRoutes = require('./profile');
const { authenticateUser } = require('../middleware/auth');

const userRouter = express.Router();
const routerV0 = express.Router();
routerV0.use('/v1/api/', userRouter);

userRouter.use('/auth', authRoutes);

// routes with cred
userRouter.use('/note', authenticateUser, noteRoutes);
userRouter.use('/connection', authenticateUser, connectionRoutes);
userRouter.use('/notification', authenticateUser, notificationRoutes);
userRouter.use('/profile', authenticateUser, profileRoutes);

module.exports = routerV0;
