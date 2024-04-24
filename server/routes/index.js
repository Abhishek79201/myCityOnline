const express = require('express');
const authRoutes = require('./auth');

const userRouter = express.Router();
const routerV0 = express.Router();
routerV0.use('/v0/api/', userRouter);

userRouter.use('/auth', authRoutes);

module.exports = routerV0;
