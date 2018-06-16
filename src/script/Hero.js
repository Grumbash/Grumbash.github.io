import {
  openPuzzleModal,
  soundClick
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
    this.clickOnThis(e);
    randomQuestion();
    openPuzzleModal();
    soundClick("/src/audio/blade.mp3")
  }

  skillTwo(e) {
    this.clickOnThis(e);
    randomQuestion();
    openPuzzleModal();
    soundClick("/src/audio/arrow.mp3")


  }

  skillThree(e) {
    this.clickOnThis(e);
    randomQuestion();
    openPuzzleModal();
    soundClick("/src/audio/hit.mp3")
  }

  skillFour(e) {
    this.clickOnThis(e);
    randomQuestion();
    openPuzzleModal();
    soundClick("/src/audio/tor.mp3");
  }

  say(){
    console.log(`Hi, my name is ${this.name}`);
  }
}
