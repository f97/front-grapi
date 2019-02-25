const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    res.render('grapi', { active: { grapi: true }  });
  } catch (e) {
    // next(e)
  }
});

module.exports = router;
