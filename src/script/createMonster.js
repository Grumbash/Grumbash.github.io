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

const createMonster = function createMonster() {
  const Monster = new Monstro;

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
