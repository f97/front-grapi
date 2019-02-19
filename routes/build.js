const express = require('express');
const router = express.Router();
const { playCode } = require('../grapi/app');
const publicAPIfolder = process.cwd() + '/public/api/';

/* GET home page. */
router.post('/', async function (req, res, next) {
  try {
    let config = {
      "appName": "Demo",
      "mongoURL": "mongodb://Test123:Test123@ds145299.mlab.com:45299/dbtest123",
      "port": 2308,
      "authenticate": true,
      "posts": [
        {
          "id": "Number",
          "title": "String",
          "author": "String"
        }
      ],
      "comments": [
        {
          "body": "String",
          "postId": "Number"
        }
      ]
    }
    let hostURL = req.protocol + '://' + req.get('host');
    let apiZipName = await playCode(publicAPIfolder, JSON.parse(req.body.config));
    res.render('build', { url: hostURL + '/api/' + apiZipName });
  } catch (e) {
    // next(e)
  }
});

module.exports = router;
