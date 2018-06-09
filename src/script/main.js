import "./shared";
import { test } from "./shared";

var crel = require('crel');



var element = crel('div',{class:"wrapGamer"},

    crel('div',{class:"sprite",id:"iconKnef"}),
    crel('div',{class:"sprite",id: "iconTarget"}),
    crel('div',{class:"sprite",id: "iconFist"}),
    crel('div',{class:"sprite",id: "iconHammer"}),
    crel('div',{id:"hero"})
);




export var faild= document.getElementById("battle");
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
    };
    if(e.target.id == "iconTarget"){
        test();
        e.target.style.pointerEvents="none";
        console.log("health -10hp")
    };
    if(e.target.id == "iconKnef"){
        console.log("health -20hp")
    };
    if(e.target.id == "iconFist"){
        console.log("health -30hp")
    };
    if(e.target.id == "iconHammer"){
        console.log("health -40hp")
    };
})