require('lib_tree');
var log = require('action_log');
var utilb = require('utils_blackboard');


var HarvesterManager = b3.Class(b3.Action);

HarvesterManager.prototype.name = 'HarvesterManager';
HarvesterManager.prototype.description = 'Manages all the harvesters';

HarvesterManager.prototype.initialize = function () {
    this.tree = Memory.tree == undefined ? this.newtree() : utilb.res(Memory.tree, new b3.BehaviorTree());
    Memory.tree = this.tree;
};

HarvesterManager.prototype.newtree = function () {
    var tree = new b3.BehaviorTree(this.properties.tree_id);
    tree.root = new b3.Sequence({
        children: [
            new b3.Priority({
                children: [
                    new log(),
                    new log(),
                    new log(),
                    new log(),
                    new log(),
                    new log()
                ]
            })
        ]
    });

    return tree;
};

HarvesterManager.prototype.open = function (tick) {
    console.log('open');
};

HarvesterManager.prototype.enter = function (tick) {
    console.log('enter');

};

HarvesterManager.prototype.tick = function (tick) {
    console.log('tick');

    //Agent (target, blackboard)
    for (var name in Game.creeps) {
        var blackboard = utilb.getBlackboardForCreep(name);
        this.tree.tick(Game.creeps[name], blackboard);
        utilb.setBlackboardForCreep(name, blackboard);
    }

};

HarvesterManager.prototype.exit = function (tick) {
    console.log('exit');
};

HarvesterManager.prototype.close = function (tick) {
    console.log('close');
};

module.exports = HarvesterManager;