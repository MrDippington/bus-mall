'use strict';

var imgContainerEl = document.getElementById('img-container');

var imgOneEl = document.getElementById('img-one');

var imgTwoEl = document.getElementById('img-two');

var imgThreeEl = document.getElementById('img-three');

// imgOneEl.src = 'img/bag.jpg';
// imgOneEl.title = 'bag';
// imgOneEl.alt = 'bag';

// imgTwoEl.src = 'img/banana.jpg';
// imgTwoEl.title = 'banana';
// imgTwoEl.alt = 'banana';

// imgThreeEl.src = 'img/bathroom.jpg';
// imgThreeEl.title = 'bathroom';
// imgThreeEl.alt = 'bathroom';

var allImgs = [];

function Img(name){
  this.name = name;
  this.filepath = `img/${name}.jpg`;

  allImgs.push(this);
}

new Img('bag');
new Img('banana');
new Img('bathroom');

function render(){
  var randomIndex = random(0, allImgs.length-1);

  imgOneEl.src = allImgs[randomIndex].filepath;
  imgOneEl.title = allImgs[randomIndex].name;
  imgOneEl.alt = allImgs[randomIndex].name;

  var randomIndex = random(0, allImgs.length-1);

  imgTwoEl.src = allImgs[randomIndex].filepath;
  imgTwoEl.title = allImgs[randomIndex].name;
  imgTwoEl.alt = allImgs[randomIndex].name;

  var randomIndex = random(0, allImgs.length-1);

  imgThreeEl.src = allImgs[randomIndex].filepath;
  imgThreeEl.title = allImgs[randomIndex].name;
  imgThreeEl.alt = allImgs[randomIndex].name;
  
}

function random(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

render();
