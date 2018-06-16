import {
  recordTable,
  recordTableItem,
  scroreText
} from "./DOM_elements";

function setScoreOnTable() {
if (+scroreText.innerText > +localStorage.getItem("score") ) {
    localStorage.setItem("score", +scroreText.innerText);
  }
}

export {setScoreOnTable};
