const express = require('express');
const router = express.Router();
const { playCode } = require('../grapi/app');
const publicAPIfolder = process.cwd() + '/public/api/';

/* GET home page. */
router.post('/', async function (req, res, next) {
  try {
    let hostURL = req.protocol + '://' + req.get('host');
    let apiZipName = await playCode(publicAPIfolder, req.body);
    res.send(hostURL + '/api/' + apiZipName);
  } catch (e) {
    // next(e)
  }
});

module.exports = router;
