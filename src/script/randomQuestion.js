
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
 
return  +question;
})();


  
 function answerForTest(){
  
 
  var  answer = +document.getElementById('answer').value;
  if(testing == answer){
  return true ;
    
  }else return false;

  
}
export{randomQuestion,answerForTest} 