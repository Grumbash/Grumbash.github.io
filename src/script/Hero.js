import {
  openPuzzleModal,
  soundClick
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
    soundClick("/src/audio/blade.mp3")
  }

  skillTwo(e) {
    openPuzzleModal();
    soundClick("/src/audio/arrow.mp3")
   
    
  }

  skillThree(e) {
    openPuzzleModal();
    soundClick("/src/audio/hit.mp3")
  }

  skillFour(e) {
    openPuzzleModal();

    soundClick("/src/audio/tor.mp3");
  }

  say(){
    console.log(`Hi, my name is ${this.name}`);
  }
}
