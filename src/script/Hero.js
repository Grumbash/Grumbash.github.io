export default class Hero {
  constructor(name, spriteURL) {
    this.name = name;
    this.URL = spriteURL;
    this.size = 35;
  }

  useSkill() {
    console.log("use the skill");
  }

  move(){
    console.log("move");
  }

  say(){
    console.log(`Hi, my name is ${this.name}`);
  }
}
