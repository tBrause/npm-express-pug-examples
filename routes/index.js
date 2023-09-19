// Modules
const express = require('express');

// Create router
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // Render the index page
  res.render('index', {
    title: 'Express JS with template engine Pug',
  });
});

// Export the router
module.exports = router;
