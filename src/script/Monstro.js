import './shared';

//for mixed property
var firstName = ['Jone', "Bruce", "Will", "Tom", "Zak", "Bryan"];

var secondName = ['ugly', "eerie", "terrible", "dirty", "raging", "agonizing"];

var lastName = ['zombi', "ogr", "vampire", "werewolf", "witch", "demon"];


export default class Monster {

    constructor() {
        //i want do this better
        this.body = this.randomProperty({
            body1: 0,
            body2: -51,
            body3: -100,
        })

        this.headX = this.randomProperty({
            head1: 0,
            head2: -50,
            head3: -100,
        });
        this.headY = 8;

        this.handLeft = this.randomProperty({
            hands1: 0,
            hands2: -48,
            hands3: -25,
        });

        this.handRight= this.randomProperty({
            hands1: 0,
            hands2: -48,
            hands3: -25,
        });

        this.legLeft = this.randomProperty({
            legs1: 0,
            legs2: -40,
            legs3: -75,
        });

        this.legRight = this.randomProperty({
            legs1: 0,
            legs2: -40,
            legs3: -75,
        })

        this.health = this.randomInteger();

        this.name = secondName.myshuffle()[0] + " " + lastName.myshuffle()[0] + " " + firstName.myshuffle()[0];
    }

    randomProperty(obj) {
        var keys = Object.keys(obj)
        return obj[keys[keys.length * Math.random() << 0]];
    }

    randomInteger() {
      var rand = ~~(100 + Math.random() * (300 + 1 - 100));
      return rand;
    }
}
