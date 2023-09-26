// Modules
const express = require('express');

// Create router
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // Render the case page
  res.render('case', {
    title: 'case',
  });
});

// Export the router
module.exports = router;
