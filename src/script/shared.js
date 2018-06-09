import {faild} from "./main";
import {randomQuestion} from "./randomQuestion";
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
var crel = require('crel');


export function test(){
   var math = crel("section",{id:'math'},
              crel("input",{type:"text"}),
              crel("p",randomQuestion())
)

faild.appendChild(math);
}
