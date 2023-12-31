// Modules
const express = require('express');

// Create router
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // Render the forms page
  res.render('forms', {
    title: 'Example using forms with Pug',
    description: 'Express JS with template engine Pug',
  });
});

// Export the router
module.exports = router;
