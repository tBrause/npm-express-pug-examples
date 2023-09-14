// Modules
const express = require('express');

// Create router
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // Render the index page
  res.render('index', {
    title: 'Express',
    description:
      'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
  });
});

// Export the router
module.exports = router;
