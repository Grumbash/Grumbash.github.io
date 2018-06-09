import "./shared";
var crel = require('crel');



var element = crel('div',{class:"wrapGamer"},

    crel('div',{class:"sprite",id:"iconKnef"}),
    crel('div',{class:"sprite",id: "iconTarget"}),
    crel('div',{class:"sprite",id: "iconFist"}),
    crel('div',{class:"sprite",id: "iconHammer"}),
    crel('div',{id:"hero"})
);




var faild= document.getElementById("battle");
faild.appendChild(element);


var magicKnife = document.getElementById("iconKnef");

var magicTarget= document.getElementById("iconTarget");
var magicFirst= document.getElementById("iconFist");
var magicHammer= document.getElementById("iconHammer");

faild.addEventListener("click",function(e){
    if(e.target.id == "hero"){
        magicKnife.classList.toggle("animed");
        magicTarget.classList.toggle("animed");
        magicFirst.classList.toggle("animed");
        magicHammer.classList.toggle("animed");
    }
})
