import {
  recordTable,
  recordTableItem,
  scroreText
} from "./DOM_elements";

function setScoreOnTable() {
  console.log(+localStorage.getItem("score"));
if (+scroreText.innerText > +localStorage.getItem("score") ) {
    localStorage.setItem("score", +scroreText.innerText);
    recordTableItem.innerText = +localStorage.getItem("score");
  }
}

export {setScoreOnTable};
