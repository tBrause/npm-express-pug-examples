// Modules
const express = require('express');

// Create router
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // Render the attributes page
  res.render('attributes', {
    title: 'attributes',
  });
});

// Export the router
module.exports = router;
