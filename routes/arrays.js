// Modules
const express = require('express');

// Create router
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const listArray = ['a', 'b', 'c'];

  // Render the index page
  res.render('arrays', {
    title: 'Express Arrays',
    description: 'Array in Express JS with template engine Pug',
    listArray: listArray,
  });
});

// Export the router
module.exports = router;
