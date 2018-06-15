const modalPuzzle = document.getElementById("puzzleMoadal");
const tryAgainText = document.getElementById("tryAgain");
const player = document.getElementById('hero');
const skills = [
  document.getElementById("iconKnef"),
  document.getElementById("iconTarget"),
  document.getElementById("iconFist"),
  document.getElementById("iconHammer")
];
const heroHP = document.getElementById('hero-health');
const monsterHP = document.getElementById('monster-health');
const $monster = document.querySelector('.monster');
const $monsterHead = document.querySelector('.monster__head');
const $monsterLeftHand = document.querySelector('.monster__left-hand');
const $monsterRightHand = document.querySelector('.monster__right-hand');
const $monsterBody = document.querySelector('.monster__body');
const $monsterLeftLeg = document.querySelector('.monster__left-leg');
const $monsterRightLeg = document.querySelector('.monster__right-leg');
const deadModal = document.querySelector('.dead-modal');
const puzzleMoadalClose = document.querySelector('.puzzleMoadal__close');
const $monsterName = document.querySelector('.monster__name');
export {
  modalPuzzle,
  tryAgainText,
  player,
  skills,
  heroHP,
  monsterHP,
  $monster,
  $monsterHead,
  $monsterLeftHand,
  $monsterRightHand,
  $monsterBody,
  $monsterLeftLeg,
  $monsterRightLeg,
  deadModal,
  puzzleMoadalClose,
  $monsterName
};
