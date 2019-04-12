const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const issue_controller = require('../controllers/issue.controller');

router.post('/create', issue_controller.issue_create);

module.exports = router;