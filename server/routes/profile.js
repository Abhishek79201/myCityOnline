const express = require('express');
const { getAllUsers } = require('../controller/profile');
const { profileSearchBody } = require('../validator/profileValidation');
const validator = require('express-joi-validation').createValidator({});
const router = express.Router();

router.post('/', validator.body(profileSearchBody), getAllUsers);
module.exports = router;
