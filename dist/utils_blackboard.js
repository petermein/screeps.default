require('lib_tree');

module.exports = {
    getBlackboardForCreep: function (id) {
        return this.res(Memory.creeps[id].blackboard, new b3.Blackboard());
    },

    setBlackboardForCreep: function (id, blackboard) {
        return Memory.creeps[id].blackboard = blackboard;
    },

    res: function (MemoryObject, Prototype) {
        for (var p in MemoryObject) {
            if (MemoryObject.hasOwnProperty(p)) {
                Prototype[p] = MemoryObject[p];
            }
        }

        return Prototype;
    }
};