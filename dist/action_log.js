var LogAction = b3.Class(b3.Action);

LogAction.prototype.name = 'LogAction';

LogAction.prototype.initialize = function (id) {
    this.id = id;
};

LogAction.prototype.open = function (tick) {
    console.log('log open');
};

LogAction.prototype.enter = function (tick) {
    console.log('log enter');
};

LogAction.prototype.tick = function (tick) {
    console.log('log tick');

    tick.target.moveTo(Game.rooms['sim'].find(FIND_SOURCES)[0]);

    console.log(tick.target);
};

LogAction.prototype.exit = function (tick) {
    console.log('log exit');
};

LogAction.prototype.close = function (tick) {
    console.log('log close');
};

module.exports = LogAction;