// Modules
const express = require('express');

// Create router
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // Render the index page
  res.render('conditionals', {
    title: 'Examples of using Conditionals with Pug',
  });
});

// Export the router
module.exports = router;
