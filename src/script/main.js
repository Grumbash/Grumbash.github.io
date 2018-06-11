import "./shared";
//import "../style/main.scss";
import Hero from "./Hero";
import Monstro from "./Monstro";

import {
  randomQuestion,
  answerForTest
} from './randomQuestion';

import {
  modalPuzzle,
  tryAgainText,
  player,
  skills,
  heroHP
} from "./DOM_elements";

const Kenny = new Hero("Kenny", skills);
const Monster = new Monstro;

heroHP.innerText = Kenny.health;
player.addEventListener("click", Kenny.clickOnThis.bind(Kenny));

skills[0].addEventListener("click", Kenny.skillOne.bind(Kenny));
skills[1].addEventListener("click", Kenny.skillTwo.bind(Kenny));
skills[2].addEventListener("click", Kenny.skillThree.bind(Kenny));
skills[3].addEventListener("click", Kenny.skillFour.bind(Kenny));


modalPuzzle.addEventListener("click", answerForTest);

export var faild= document.getElementById("battle");
