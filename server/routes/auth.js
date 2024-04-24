const express = require('express');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const { signIn, emailAuthVerify, signUp } = require('../controller/auth');

const router = express.Router();

const emailVerifyAuthBody = Joi.object({
  email: Joi.string().email().required(),
  otp: Joi.string().max(6).required(),
});

router.post('/signin', validator.body(emailVerifyAuthBody), signIn);
router.post('/signup', validator.body(emailVerifyAuthBody), signUp);
router.post(
  '/email-verify',
  validator.body(emailVerifyAuthBody),
  emailAuthVerify,
);

module.exports = router;
