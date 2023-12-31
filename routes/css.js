// Modules
const express = require('express');

// Create router
const router = express.Router();

/* GET css page. */
router.get('/', function (req, res, next) {
  // Render the index page
  res.render('css', {
    title: 'Express CSS',
  });
});

// Export the router
module.exports = router;
