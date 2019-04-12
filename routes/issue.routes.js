const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const issue_controller = require('../controllers/issue.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', issue_controller.test);
module.exports = router;