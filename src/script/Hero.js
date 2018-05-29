export default class Hero {
  constructor(name) {
    this.name = name;
  }

  useSkill() {
    console.log("use the skill");
  }

  move(){
    console.log("move");
  }

  speak(){
    console.log(`Hi, my name is ${this.name}`);
  }
}
