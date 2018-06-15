import {
  heroHP,
  monsterHP,
  deadModal
} from './DOM_elements';

import {getRandomInt} from './randomQuestion';
import {createMonster} from "./createMonster";

function setDamageToHero() {
  const curHP = heroHP.innerText;
  heroHP.innerText = curHP - getRandomInt(20, 50);
  console.log("Hero health:" + heroHP.innerText);
  if (heroHP.innerText <= 0) {
    deadModal.classList.toggle("opacity-modal");
  }
}

function setDamageToMonster() {
  const curHP = monsterHP.innerText;
  monsterHP.innerText = curHP - getRandomInt(20, 50);
  console.log("Monster health:" + monsterHP.innerText);
  if (monsterHP.innerText <= 0) {
    createMonster();
  }
}

export {
  setDamageToHero,
  setDamageToMonster
};
