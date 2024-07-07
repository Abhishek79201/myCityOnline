const express = require('express');
const { noteBody } = require('../validator/noteValidation');
const { createNote } = require('../controller/note');
const validator = require('express-joi-validation').createValidator({});
const router = express.Router();

router.post('/create_note', validator.body(noteBody), createNote);
module.exports = router;
