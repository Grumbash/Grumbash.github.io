import Hero from './Hero.js';
import Monster from './Monstro.js';
//import './script/shared.js';
var canvas = document.getElementById("canvas");
console.log(canvas)
var ctx = canvas.getContext("2d");

//отрисовывает 
function draw(url, setting) {
    var img = document.createElement('img');
    img.src = url;
    img.onload = function () {
     
         ctx.drawImage(img,setting.positionX,setting.positionY,setting.imgWidth,setting.imgHeight,setting.positionOnFaildX,setting.positionOnFaildy,40,40)
    }

}

let Monstro = new Monster;
console.log(Monstro.doMonstro());
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



let Carl = new Hero("Carl");
// object with prop legs,head,body,hands


console.log(Carl.speak());
