import {
  openPuzzleModal
 } from "./shared";

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
    openPuzzleModal();
  }

  skillTwo(e) {
    openPuzzleModal();
  }

  skillThree(e) {
    openPuzzleModal();
  }

  skillFour(e) {
    openPuzzleModal();
  }

  say(){
    console.log(`Hi, my name is ${this.name}`);
  }
}
