var harvester = require('roles_harvester');

// global.Cache = new Cache();
module.exports.loop = function () {
    harvester.run();
};