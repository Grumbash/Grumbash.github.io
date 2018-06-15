import {closeModal} from "./shared";
import "../style/main.scss";
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
  heroHP,
  puzzleMoadalClose
} from "./DOM_elements";

import {createMonster} from "./createMonster";

const Kenny = new Hero("Kenny", skills);
createMonster();

heroHP.innerText = Kenny.health;
player.addEventListener("click", Kenny.clickOnThis.bind(Kenny));

skills[0].addEventListener("click", Kenny.skillOne.bind(Kenny));
skills[1].addEventListener("click", Kenny.skillTwo.bind(Kenny));
skills[2].addEventListener("click", Kenny.skillThree.bind(Kenny));
skills[3].addEventListener("click", Kenny.skillFour.bind(Kenny));

modalPuzzle.addEventListener("click", answerForTest);
puzzleMoadalClose.addEventListener("click", closeModal);

export var faild= document.getElementById("battle");
