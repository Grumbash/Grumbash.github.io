const canvas = document.getElementById("canvas");
console.log(canvas)
const ctx = canvas.getContext("2d");
//отрисовывает
export default function draw(url, setting) {
    var img = document.createElement('img');
    img.src = url;
    img.onload = function () {
         ctx.drawImage(
           img,
           setting.positionX,
           setting.positionY,
           setting.imgWidth,
           setting.imgHeight,
           setting.positionOnFaildX,
           setting.positionOnFaildy,
           setting.sizeX,
           setting.sizeY
         )
    }
}
