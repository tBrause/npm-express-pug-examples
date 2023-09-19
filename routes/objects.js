// Modules
const express = require('express');

// Create router
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // Render the index page
  res.render('objects', {
    title: 'Express Objects',
    description: 'Express JS with template engine Pug',
  });
});

// Export the router
module.exports = router;
