import Monstro from './Monstro';
import {
  monsterHP,
  $monster,
  $monsterHead,
  $monsterLeftHand,
  $monsterRightHand,
  $monsterBody,
  $monsterLeftLeg,
  $monsterRightLeg,
  $monsterName
} from './DOM_elements'

import {
  soundClick,
  getRandomSound,
  pathSound
} from "./shared";

const createMonster = function createMonster() {
  const Monster = new Monstro;
  $monster.addEventListener("click", (e)=>{
    const sound = getRandomSound([
      `${pathSound}Sound_Zombi.mp3`,
      `${pathSound}Sound_Zombi2.mp3`,
      `${pathSound}Sound_Zombi3.mp3`
    ]);
    soundClick(sound, 0.4);
  });

  $monsterHead.style.objectPosition = `${Monster.headX}px 0px`;
  $monsterLeftHand.style.objectPosition = `${Monster.handLeft}px 0px`;
  $monsterRightHand.style.objectPosition = `${Monster.handRight}px 0px`;
  $monsterBody.style.objectPosition = `${Monster.body}px 0px`;
  $monsterLeftLeg.style.objectPosition = `${Monster.legLeft}px 0px`;
  $monsterRightLeg.style.objectPosition = `${Monster.legRight}px 0px`;
  monsterHP.innerText = Monster.health;
  $monsterName.innerText = Monster.name;
};


export {createMonster};
