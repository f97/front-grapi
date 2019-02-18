var express = require('express');
var router = express.Router();
const { playCode } = require('../grapi/app');
const DIR_NAME = process.cwd() + '/public/api/';

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const url = await playCode(DIR_NAME);
    res.render('index', { title: url });
  } catch (e) {
    next(e) 
  }
});

module.exports = router;
