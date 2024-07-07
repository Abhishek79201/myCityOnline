const Joi = require("joi");

const profileSearchBody = Joi.object({
    searchEmail: Joi.string().required()
}).required();

module.exports = { profileSearchBody }
