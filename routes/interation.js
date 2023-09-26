// Modules
const express = require('express');

// Create router
const router = express.Router();

/* GET interation page. */
router.get('/', function (req, res, next) {
  // Render the interation page
  res.render('interation', {
    title: 'Examples of using Iteration with Pug',
  });
});

// Export the router
module.exports = router;
