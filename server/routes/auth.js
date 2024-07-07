const express = require('express');
const validator = require('express-joi-validation').createValidator({});
const { signUp, emailAuth, googleAuth } = require('../controller/auth');
const { onBoardSchema, googleAuthBody, emailAuthBody } = require('../validator/authValidation');
const { findUser } = require('../middleware/auth');
const router = express.Router();

router.post('/signup', validator.body(onBoardSchema), findUser, signUp);
router.post('/google', validator.body(googleAuthBody), googleAuth);
router.post('/email', validator.body(emailAuthBody), emailAuth);
module.exports = router;
