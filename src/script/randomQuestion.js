import {tryAgainText} from "./DOM_elements"
import {
  setDamageToHero,
  setDamageToMonster
} from './damage'
var question;

const rand =  function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomQuestion = function randomQuestion(){
  var test = [];

  var numberOne = rand(1,20)
  var numberTwo = rand(1,20);
  var operant = ['+','-','*','/'];

  test.push(numberOne);
  test.push(operant[Math.floor(Math.random() * operant.length)]);
  test.push(numberTwo);

  question =  eval(" "+test[0] + test[1] + test[2]  )
  var text = document.getElementById("quetion").innerHTML = test[0] + " " + test[1] + " " + test[2];
  console.log(question);
 return  +question
}

function answerForTest(e){
  var  answer = +document.getElementById('answer').value;
  if (e.target.id === "getAnswer") {
    if(question === answer){
      console.log(`This is right answer: ${question}`);
      console.log(`This is your answer: ${answer}`);
      tryAgainText.innerText = "Bravo! 👏👏👏";
      setDamageToMonster();
    }else {
      console.log(`This is right answer: ${question}`);
      console.log(`This is your answer: ${answer}`);
      tryAgainText.innerText = "Try again! 😏";
      setDamageToHero()
    }
  }
}


export{randomQuestion, answerForTest, rand as getRandomInt}
