// store, calculate, and visually display the resulting data
// not allow any results to be shown to users until there have been a total of 25 selections made
// show how many times and item is displayed and clicked

//when images is clicked add a vote 
// custom font, color palette, layout with semantic HTML


// Want to be able to receive clicks, and track those clicks for each image.

// You'll probably find it useful to create a property that contains a text string you can use as an ID in HTML.

  
//once 25 votes have been made stop the event listener
//display the results
//event listener
//event handler
// After 25 selections have been made, turn off the event listeners on the images (to prevent additional voting) and also display a list of the products with votes received with each list item looking like "3 votes for the Banana Slicer".

'use strict';

var imgContainerEl = document.getElementById('img-container');
var imgOneEl = document.getElementById('img-one');
var imgTwoEl = document.getElementById('img-two');
var imgThreeEl = document.getElementById('img-three');
var allImgs = [];
var recentRandomNumbers = [];
var maxVotes = 25;

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
function imageGenerator(){
  render();
}

function render(){
// 1st Image
  var randomIndex = random(0, allImgs.length -1);

  while(recentRandomNumbers.includes(randomIndex)){
    randomIndex = random(0, allImgs.length-1);
  }

  if(recentRandomNumbers.length > 6){
    recentRandomNumbers.splice(0,3);
  }

  recentRandomNumbers.push(randomIndex);

  imgOneEl.src = allImgs[randomIndex].filepath;
  imgOneEl.title = allImgs[randomIndex].name;
  imgOneEl.alt = allImgs[randomIndex].name;

  allImgs[randomIndex].timesDisplayed ++;
 
  // 2nd Image
  randomIndex = random(0, allImgs.length -1);

  while(recentRandomNumbers.includes(randomIndex)){
    randomIndex = random(0, allImgs.length-1);
  }

  if(recentRandomNumbers.length > 6){
    recentRandomNumbers.splice(0,3);
  }

  recentRandomNumbers.push(randomIndex);

  imgTwoEl.src = allImgs[randomIndex].filepath;
  imgTwoEl.title = allImgs[randomIndex].name;
  imgTwoEl.alt = allImgs[randomIndex].name;

  allImgs[randomIndex].timesDisplayed ++;
  // 3rd Image
  randomIndex = random(0, allImgs.length -1);

  while(recentRandomNumbers.includes(randomIndex)){
    randomIndex = random(0, allImgs.length-1);
  }

  if(recentRandomNumbers.length > 6){
    recentRandomNumbers.splice(0,3);
  }

  recentRandomNumbers.push(randomIndex);

  imgThreeEl.src = allImgs[randomIndex].filepath;
  imgThreeEl.title = allImgs[randomIndex].name;
  imgThreeEl.alt = allImgs[randomIndex].name;
  
  allImgs[randomIndex].timesDisplayed ++;
  maxVotes --;
  if(maxVotes === 0){
    imgContainerEl.removeEventListener('click', imageGenerator);

  }
}

function random(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

imgContainerEl.addEventListener('click', imageGenerator);

render();
