'use strict';

// Global variables

const imagesContainer = document.getElementById('odd');


const button = document.getElementById('showResults');

const image1 = document.querySelector('#odd img:first-child');
const image2 = document.querySelector('#odd img:nth-child(2)');
const image3 = document.querySelector('#odd img:nth-child(3)');

let state = {
  numClicksSoFar:  0,
  numClicksAllowed: 25,
  allPictures: [],
};

// Pictures contructor function, takes declared pictures below, gives all these properties, then pushes into allPictures array
function Pictures(name, img) {
  this.name = name;
  this.imageFile = img;
  this.votes = 0;
  this.views = 0;
  state.allPictures.push(this);
}

// Helper functions
function renderPageImages (){
  function pickRandomPicture (){
    return Math.floor(Math.random()*state.allPictures.length);
  }
  let odd1 = pickRandomPicture();
  let odd2 = pickRandomPicture();
  let odd3 = pickRandomPicture();

  while (odd1 === odd2){
    odd2 = pickRandomPicture();
  }
  while (odd2 === odd3){
    odd3 = pickRandomPicture();
  }
  while (odd3 === odd1){
    odd1 = pickRandomPicture();
  }

  // puts images on screen
  image1.src = state.allPictures[odd1].imageFile;
  image1.alt = state.allPictures[odd1].name;

  state.allPictures[odd1].views++;

  image2.src = state.allPictures[odd2].imageFile;
  image2.alt = state.allPictures[odd2].name;

  state.allPictures[odd2].views++;

  image3.src = state.allPictures[odd3].imageFile;
  image3.alt = state.allPictures[odd3].name;

  state.allPictures[odd3].views++;

}

// Run meaningful code

function renderResultsButton() {
  button.style.display = 'block';
}

function renderResults() {
  console.log('Showing the Results');
}

// get bane from alt tag of the image
function handleClick(event){
  let pictureName = event.target.alt;

  for (let i = 0; i < state.allPictures.length; i++) {
    if (pictureName === state.allPictures[i].name) {
      state.allPictures[i].votes++;
      break;
    }
  }

  state.numClicksSoFar++;

  if (state.numClicksSoFar >= state.numClicksAllowed) {
    removeListener();
    renderResultsButton();
  } else {
    renderPageImages();
  }
}

function startListeners() {
  imagesContainer.addEventListener('click', handleClick);
  button.addEventListener('click', renderResults);
}

function removeListener() {
  imagesContainer.removeEventListener('click', handleClick);
}

new Pictures('bag', 'img/bag.jpg');
new Pictures('banana', 'img/banana.jpg');
new Pictures('bathroom', 'img/bathroom.jpg');
new Pictures('boots', 'img/boots.jpg');
new Pictures('breakfast,', 'img/breakfast.jpg');
new Pictures('bubblegum', 'img/bubblegum.jpg');
new Pictures('chair', 'img/chair.jpg');
new Pictures('cthulhu', 'img/cthulhu.jpg');
new Pictures('dog-duck', 'img/dog-duck.jpg');
new Pictures('dragon', 'img/dragon.jpg');
new Pictures('pen', 'img/pen.jpg');
new Pictures('pet-sweep', 'img/pet-sweep.jpg');
new Pictures('scissors', 'img/scissors.jpg');
new Pictures('shark', 'img/shark.jpg');
new Pictures('sweep', 'img/sweep.png');
new Pictures('tauntaun', 'img/tauntaun.jpg');
new Pictures('unicorn', 'img/unicorn.jpg');
new Pictures('water-can', 'img/water-can.jpg');
new Pictures('wine-glass', 'img/wine-glass.jpg');

renderPageImages();
startListeners();



