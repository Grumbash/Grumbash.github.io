import {faild} from "./main";
import {randomQuestion} from "./randomQuestion";
import { modalPuzzle, skills } from "./DOM_elements"


const pathSound = "./src/audio/";

Array.prototype.myshuffle = function () {
    var newArray = [];
    var index = {};
    var lenArray = this.length;

    for (var x = (lenArray - 1); x >= 0; x--) {
        var rand = Math.round(Math.random() * (lenArray - 1));
        var key = 'key_' + rand;
        if (key in index) {
            x++;
            continue;
        } else {
            index[key] = this[rand];
            newArray.push(this[rand]);
        }
    }

    return newArray;
};

function openPuzzleModal() {
  modalPuzzle.classList.toggle("hide-block");
}

function closeModal(e) {
  this.parentElement.classList.toggle("hide-block");
}

//audio
function soundClick(path, vol, loop = false) {
    const audio = new Audio(); // Создаём новый элемент Audio
    audio.src = path; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
    audio.volume = vol || 1;
    audio.loop = loop;
}

function getRandomSound(arr){
    const rand = Math.floor(Math.random() * (arr.length - 0));
    return arr[rand];
}

export {openPuzzleModal, closeModal, soundClick, getRandomSound, pathSound};
