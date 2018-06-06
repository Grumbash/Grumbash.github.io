import Hero from './Hero.js';
import Monster from './Monstro.js';
import draw from './draw.js'


let Monstro = new Monster;
draw('/src/img/spritesheet.png',{
    positionX:Monstro.head,
    positionY:0,
    imgWidth:50,
    imgHeight:50,
    positionOnFaildX:0,
    positionOnFaildy:150,
    sizeX:40,
    sizeY:40,

});



let Kenny = new Hero("Kenny", "src/img/Kenny.png");
let Luke = new Hero("Luke", "src/img/Luke.png");
let Nick = new Hero("Nick", "src/img/Nick.png");
// object with prop legs,head,body,hands


draw(`${Kenny.URL}`,{
    positionX:0,
    positionY:0,
    imgWidth:240,
    imgHeight:368,
    positionOnFaildX:150,
    positionOnFaildy:50,
    sizeX:1*Kenny.size,
    sizeY:3.5*Kenny.size,
});
