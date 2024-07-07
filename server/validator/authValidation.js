const Joi = require("joi");

const onBoardSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(30).pattern(new RegExp('^[a-zA-Z0-9@#$%^&+=]{8,30}$')).required()
});

const googleAuthBody = Joi.object({
    tokenId: Joi.string().required(),
}).required();

const emailAuthBody = Joi.object({

    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

module.exports = { googleAuthBody, emailAuthBody, onBoardSchema }