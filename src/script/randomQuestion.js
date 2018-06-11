import {tryAgainText} from "./DOM_elements"

var testing = (function randomQuestion(){
  var test = [];

  var rand =  function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  var numberOne = rand(1,20)
  var numberTwo = rand(1,20);
  var operant = ['+','-','*','/'];

  test.push(numberOne);
  test.push(operant[Math.floor(Math.random() * operant.length)]);
  test.push(numberTwo);

  var question =  eval(" "+test[0] + test[1] + test[2]  )
  var text = document.getElementById("quetion").innerHTML = test[0] + " " + test[1] + " " + test[2];
  console.log(text)

 return  +question
})();
console.log(testing);
 function answerForTest(e){
  var  answer = +document.getElementById('answer').value;
  if (e.target.id === "getAnswer") {
    if(testing === answer){
      tryAgainText.innerText = "Bravo! 👏👏👏"
    }else {
      tryAgainText.innerText = "Try again! 😏"
    }
  }
}

export{randomQuestion,answerForTest}
