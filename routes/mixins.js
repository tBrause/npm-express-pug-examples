// Modules
const express = require('express');

// Create router
const router = express.Router();

/* GET mixins page. */
router.get('/', function (req, res, next) {
  // Render the index page
  res.render('mixins', {
    title: 'Examples of using Mixins with Pug',
  });
});

// Export the router
module.exports = router;
