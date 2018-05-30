import '../script/shared.js';
//mixed array
Array.prototype.myshuffle = function () {
    var newArray = [];
    var index = {};
    var lenArray = this.length;

    for (var x = (lenArray - 1); x >= 0; x--) {
        var rand = Math.round(Math.random() * (lenArray - 1));
        var key = 'key_' + rand;
        if (key in index) {
            x++;
            continue;
        } else {
            index[key] = this[rand];
            newArray.push(this[rand]);
        }
    }

    return newArray;
};
