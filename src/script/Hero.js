import {
  openPuzzleModal
 } from "./shared";

import {randomQuestion} from "./randomQuestion"

export default class Hero {
  constructor(name, skills) {
    this.name = name;
    this.skills = skills;
    this.health = 300;
  }

  clickOnThis(e) {
      for (let i = 0; i < this.skills.length; i++) {
        this.skills[i].classList.toggle("animed");
      }
  }

  skillOne(e) {
    randomQuestion();
    openPuzzleModal();
  }

  skillTwo(e) {
    randomQuestion();
    openPuzzleModal();
  }

  skillThree(e) {
    randomQuestion();
    openPuzzleModal();
  }

  skillFour(e) {
    randomQuestion();
    openPuzzleModal();
  }

  say(){
    console.log(`Hi, my name is ${this.name}`);
  }
}
