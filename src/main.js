var Harvester = require('roles_harvester');
require('lib_tree');
var utilb = require('utils_blackboard');

var tree = new b3.BehaviorTree(Memory.tree_id);
tree.root = new b3.Sequence({
    children: [
        new b3.Priority({
            children: [
                new Harvester('harvest1')
            ]
        })
    ]
});

// global.Cache = new Cache();
module.exports.loop = function () {

    //Get global blackboard from memory
    var blackboard = Memory.blackboard == undefined ? new b3.Blackboard() : utilb.res(Memory.blackboard, new b3.Blackboard());

    tree.tick(Game, blackboard);

    console.log('Main tree: ' + tree.id);

    Memory.tree_id = tree.id;
    Memory.blackboard = blackboard;
};
