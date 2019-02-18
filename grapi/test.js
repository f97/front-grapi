const { playCode } = require('./app');
const DIR_NAME = process.cwd() + '/';

async function returnurlDownload() {
    var zipurl = await playCode(DIR_NAME);
    console.log(zipurl);
}

returnurl();