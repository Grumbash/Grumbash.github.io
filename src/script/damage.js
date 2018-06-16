import {
  heroHP,
  monsterHP,
  deadModal,
  scroreText
} from './DOM_elements';

import {
  soundClick,
  getRandomSound,
  pathSound
} from "./shared";

import {setScoreOnTable} from "./recordTable"
import {getRandomInt} from './randomQuestion';
import {createMonster} from "./createMonster";

function setDamageToHero() {
  const curHP = heroHP.innerText;
  heroHP.innerText = curHP - getRandomInt(20, 50);
  const sound = getRandomSound([
    `${pathSound}Miss_1.mp3`,
    `${pathSound}Miss_2.mp3`,
    `${pathSound}Miss_3.mp3`,
  ]);
  soundClick(sound, 0.4);
  if (heroHP.innerText <= 0) {
    soundClick(sound, 0.4);
    deadModal.classList.toggle("opacity-modal");
    setScoreOnTable(`${pathSound}YouDied.mp3`, 0.75);
  }
}

function setDamageToMonster() {
  const curHP = monsterHP.innerText;
  monsterHP.innerText = curHP - getRandomInt(20, 50);
  if (monsterHP.innerText <= 0) {
    let locScore = +scroreText.innerText;
    scroreText.innerText = locScore + 1;
    const sound = getRandomSound([
      `${pathSound}Zombi_Fall.mp3`,
      `${pathSound}Sound_Fall2.mp3`
    ]);
    soundClick(sound, 0.4);
    createMonster();
  }
}

export {
  setDamageToHero,
  setDamageToMonster
};
