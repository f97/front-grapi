const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    res.render('index', { title: 'Công Cụ' });
  } catch (e) {
    // next(e)
  }
});

module.exports = router;
