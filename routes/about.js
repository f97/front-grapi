var express = require('express');
var router = express.Router();

router.get('/', async function (req, res, next) {
  try {
    res.render('about', { active: { about: true }  });
  } catch (e) {
    next(e)
  }
});

module.exports = router;
