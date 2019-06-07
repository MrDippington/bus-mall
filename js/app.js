'use strict';

var imgContainerEl = document.getElementById('img-container');
var imgOneEl = document.getElementById('img-one');
var imgTwoEl = document.getElementById('img-two');
var imgThreeEl = document.getElementById('img-three');
var allImgs = [];

function Img(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.totalClicks = 0;
  this.timesDisplayed = 0;

  allImgs.push(this);
}

new Img('bag', 'img/bag.jpg');
new Img('banana', 'img/banana.jpg');
new Img('bathroom', 'img/bathroom.jpg');
new Img('boots', 'img/boots.jpg');
new Img('breakfast', 'img/breakfast.jpg');
new Img('bubblegum', 'img/bubblegum.jpg');
new Img('chair', 'img/chair.jpg');
new Img('cthulhu', 'img/cthulhu.jpg');
new Img('dog-duck', 'img/dog-duck.jpg');
new Img('dragon', 'img/dragon.jpg');
new Img('pen', 'img/pen.jpg');
new Img('pet-sweep', 'img/pet-sweep.jpg');
new Img('scissors', 'img/scissors.jpg');
new Img('shark', 'img/shark.jpg');
new Img('sweep', 'img/sweep.png');
new Img('tauntaun', 'img/tauntaun.jpg');
new Img('unicorn', 'img/unicorn.jpg');
new Img('usb', 'img/usb.gif');
new Img('water-can', 'img/water-can.jpg');
new Img('wine-glass', 'img/wine-glass.jpg');

function render(){
  var randomIndex = random(0, allImgs.length -1);
  imgOneEl.src = allImgs[randomIndex].filepath;
  imgOneEl.title = allImgs[randomIndex].name;
  imgOneEl.alt = allImgs[randomIndex].name;

  var randomIndex = random(0, allImgs.length -1);

  imgTwoEl.src = allImgs[randomIndex].filepath;
  imgTwoEl.title = allImgs[randomIndex].name;
  imgTwoEl.alt = allImgs[randomIndex].name;

  var randomIndex = random(0, allImgs.length -1);

  imgThreeEl.src = allImgs[randomIndex].filepath;
  imgThreeEl.title = allImgs[randomIndex].name;
  imgThreeEl.alt = allImgs[randomIndex].name;
  
}

function random(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

render();
