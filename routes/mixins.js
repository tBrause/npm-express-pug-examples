// Modules
const express = require('express');

// Create router
const router = express.Router();

/* GET mixins page. */
router.get('/', function (req, res, next) {
  // Render the index page
  res.render('mixins', {
    title: 'Express',
    description: 'Express JS with template engine Pug',
  });
});

// Export the router
module.exports = router;
