//for mixed property
var randomProperty = function (obj) {
    var keys = Object.keys(obj)
    return obj[keys[keys.length * Math.random() << 0]];
};

class Monster {
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
                head1: 1,
                head2: 2,
                head3: 3,
                head4: 4,
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


    }


    doMonstro() {
        return {
            head: this.head,
            body: this.body,
            hands: this.hands,
            legs: this.legs
        }
    }

}
// object with prop legs,head,body,hands
var Monstro = new Monster;
console.log(Monstro.doMonstro());