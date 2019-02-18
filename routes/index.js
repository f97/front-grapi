const express = require('express');
const router = express.Router();
const { playCode } = require('../grapi/app');
const publicAPIfolder = process.cwd() + '/public/api/';

/* GET home page. */
router.get('/', async function (req, res, next) {
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
    let url = await playCode(publicAPIfolder, config);
    res.render('index', { title: url });
  } catch (e) {
    next(e)
  }
});

module.exports = router;
