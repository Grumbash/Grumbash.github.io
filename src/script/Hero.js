export default class Hero {
  constructor(name, spriteURL) {
    this.name = name;
    this.URL = spriteURL;
    this.size = 35;
  }

  shoot() {
    console.log("Bang-Bang!");
  }

  cast(){
    console.log("Some-cast");
  }

  pray(){

  }

  move(){
    console.log("move");
  }

  say(){
    console.log(`Hi, my name is ${this.name}`);
  }
}
