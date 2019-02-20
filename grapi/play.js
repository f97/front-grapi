const fs = require('fs');
const template = require('./templates');
// const DIR_NAME = process.cwd() + '/';

const createAppFolder = (public_folder, appName) => {
  try {
    fs.mkdirSync(public_folder + appName);
    console.log("Create Folder: " + appName);
  } catch (err) {
    throw new Error(err);
  }
}

const createPackageJson = (public_folder, appName) => {
  try {
    fs.writeFileSync(public_folder + appName + '/package.json',
      template.packageTemplate(appName));
    console.log('Writing package.json');
  } catch (err) {
    throw new Error(err);
  }
}

const createServerjs = (public_folder, appName, mongoURL, models, port, authenticate) => {
  try {
    fs.writeFileSync(public_folder + appName + '/server.js',
      template.serverjsTemplate(mongoURL, models, port, authenticate));
    console.log('Writing server.js');
  } catch (err) {
    throw new Error(err);
  }
}

const createApiFolder = (public_folder, appName) => {
  try {
    fs.mkdirSync(public_folder + appName + '/api');
    console.log("Create Folder: api");
    fs.mkdirSync(public_folder + appName + '/api/routes');
    console.log("Create Folder: routes");
    fs.mkdirSync(public_folder + appName + '/api/controllers');
    console.log("Create Folder: controllers");
    fs.mkdirSync(public_folder + appName + '/api/models');
    console.log("Create Folder: models");
  } catch (err) {
    throw new Error(err);
  }
}

const createControllers = (public_folder, appName, models) => {
  try {
    for (var i = 4; i < models.length; i++) {
      fs.writeFileSync(`${public_folder + appName + '/'}api/controllers/${models[i]}Controller.js`,
        template.controllerTemplate(models[i]));
      console.log(`Writing ${models[i]}Controller.js`);
    }
  } catch (err) {
    throw new Error(err);
  }
}

const createRoutes = (public_folder, appName, models, config) => {
  try {
    fs.writeFileSync(`${public_folder}${appName}/api/routes/homeRoute.js`,
      template.homeRouteTemplate());
    console.log(`Writing homeRoute.js`);
    for (var i = 4; i < models.length; i++) {
      attributes = Object.keys(config[models[i]]);
      types = Object.values(config[models[i]]);
      fs.writeFileSync(`${public_folder + appName + '/'}api/routes/${models[i]}Route.js`,
        template.routesTemplate(models[i], attributes, types));
      console.log(`Writing ${models[i]}Route.js`);
    }
  } catch (err) {
    throw new Error(err);
  }
}

const createModel = (public_folder, appName, models, config) => {
  try {
    for (var i = 4; i < models.length; i++) {
      attributes = Object.keys(config[models[i]]);
      types = Object.values(config[models[i]]);
      fs.writeFileSync(`${public_folder + appName + '/'}api/models/${models[i]}Model.js`,
        template.modelsTemplate(models[i], attributes, types));
      console.log(`Writing ${models[i]}Model.js`);
    }
  } catch (err) {
    throw new Error(err);
  }
}

const createAuthentication = (public_folder, appName) => {
  try {
    fs.writeFileSync(`${public_folder}${appName}/api/routes/usersRoute.js`,
      template.userRouteTemplate());
    console.log(`Writing homeRoute.js`);
    fs.writeFileSync(`${public_folder}${appName}/api/models/usersModel.js`,
      template.userModelTemplate());
    console.log(`Writing homeRoute.js`);
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  createAppFolder,
  createPackageJson,
  createServerjs,
  createApiFolder,
  createControllers,
  createRoutes,
  createModel,
  createAuthentication
}