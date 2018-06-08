import draw from './draw.js';
import Hero from './Hero.js';
import Monster from './Monstro.js';


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
// object with prop legs,head,body,hands
Kenny.shoot();

document.addEventListener("keyup", (e)=>{
  if (e.key ===" ") {
    Kenny.shoot();
  } else if (e.key ==="w"){
    Kenny.cast();
  }
});

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
