import '../script/shared.js';

//for mixed property
var randomProperty = function (obj) {
    var keys = Object.keys(obj)
    return obj[keys[keys.length * Math.random() << 0]];
};
var firstName = ['Jone', "Bruce", "Will", "Tom", "Zak", "Bryan"];

var secondName = ['ugly', "eerie", "terrible", "dirty", "raging", "agonizing"];

var lastName = ['zombi', "ogr", "vampire", "werewolf", "witch", "demon"];


export default class Monster {

    constructor() {
        //i want do this better
        this.body = (function doBody() {
            return randomProperty({
                body1: 1,
                body2: 2,
                body3: 3,
                body4: 4,
            })
        })();

        this.head = (function doHead() {
            return randomProperty({
                head1: 0,
                head2: 50,
                head3: 105,

            })
        })();

        this.hands = (function doHands() {
            return randomProperty({
                hands1: 1,
                hands2: 2,
                hands3: 3,
                hands4: 4,
            })
        })();

        this.legs = (function doLegs() {
            return randomProperty({
                legs1: 1,
                legs2: 2,
                legs3: 3,
                legs4: 4,
            })
        })();
        this.health = (function randomInteger(min, max) {
            var rand = ~~(100 + Math.random() * (300 + 1 - 100));
            return rand;
        })();
        this.name = secondName.myshuffle()[0] + " " + lastName.myshuffle()[0] + " " + firstName.myshuffle()[0];
    }

}
