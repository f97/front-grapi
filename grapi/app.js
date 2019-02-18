const play = require('./play');
const fs = require('fs');
const grapiFolder = process.cwd() + '/grapi/';
const zipper = require('zip-local');
const rimraf = require("rimraf");

async function playCode(public_folder, config) {
    // public_folder = 'C:\\Users\\Administrator\\Projects\\front-grapi\\public\\api\\';
    // if(fs.existsSync('config.json', 'utf8')){
    // config = await JSON.parse(fs.readFileSync(grapiFolder + 'config.json', 'utf8'));
    let id = await fs.readFileSync(grapiFolder + 'id.txt', 'utf8');
    fs.writeFile(grapiFolder + 'id.txt', Number(id) + 1, 'utf8', (err) => {
        if (err) {
            return console.log(err);
        }
    })
    let configKeys = await Object.keys(config);
    if (fs.existsSync(public_folder + config.appName)) {
        console.log('The folder ' + config.appName + ' exists!');
        return 0;
    }
    play.createAppFolder(public_folder, config.appName);
    play.createPackageJson(public_folder, config.appName);
    play.createServerjs(public_folder, config.appName, config.mongoURL, configKeys, config.port, config.authenticate);
    play.createApiFolder(public_folder, config.appName);
    if (config.authenticate) {
        play.createAuthentication(public_folder, config.appName);
    }
    play.createControllers(public_folder, config.appName, configKeys);
    play.createRoutes(public_folder, config.appName, configKeys, config);
    play.createModel(public_folder, config.appName, configKeys, config);

    zipper.sync.zip(public_folder + config.appName).compress().save(public_folder + config.appName + '_' + encode(id) + ".zip");

    rimraf.sync(public_folder + config.appName);
    console.log(public_folder + config.appName + config.appName + '_' + encode(id) + '.zip');

    console.log('Done!!!');
    return public_folder + config.appName + '_' + encode(id) + '.zip';
    process.exit(0);
    // } else {
    //     console.log('Not exists config.json file, add config.json file... Please...');
    //     return 0;
    // }
}

const alphabets = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const base = alphabets.length;

const encode = (num) => {
    let code = '';
    while (num > 0) {
        code = alphabets.charAt(num % base) + code;
        num = Math.floor(num / base);
    }
    return code;
};

module.exports = {
    playCode
}