import {
  heroHP,
  monsterHP
} from './DOM_elements';

import {getRandomInt} from './randomQuestion'

function setDamageToHero() {
  const curHP = heroHP.innerText;
  heroHP.innerText = curHP - getRandomInt(20, 50);
  console.log(heroHP.innerText);

}

function setDamageToMonster() {
  const curHP = monsterHP.innerText;
  monsterHP.innerText = curHP - getRandomInt(20, 50);
  console.log(monsterHP.innerText);
}

export {
  setDamageToHero,
  setDamageToMonster
};
