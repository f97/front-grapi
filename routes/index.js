const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    res.render('dashboard', { title: 'Dashboard' });
  } catch (e) {
    // next(e)
  }
});

module.exports = router;
