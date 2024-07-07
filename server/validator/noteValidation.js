const Joi = require("joi");

const noteBody = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).allow(null),
    sharedWith: Joi.array().items(Joi.string()).allow(null),
}).required();

module.exports = { noteBody }
