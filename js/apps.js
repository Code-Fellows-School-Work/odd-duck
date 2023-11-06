'use strict';

// Global variables

const imagesContainer = document.getElementById('odd');


const button = document.getElementById('showResults');

const image1 = document.querySelector('#odd img:first-child');
const image2 = document.querySelector('#odd img:nth-child(2)');
const image3 = document.querySelector('#odd img:nth-child(3)');
// const image4 = document.querySelector('#odd img:nth-child(4)');
// const image5 = document.querySelector('#odd img:nth-child(5)');
// const image6 = document.querySelector('#odd img:nth-child(6)');
// const image7 = document.querySelector('#odd img:nth-child(7)');
// const image8 = document.querySelector('#odd img:nth-child(8)');
// const image9 = document.querySelector('#odd img:nth-child(9)');
// const image10 = document.querySelector('#odd img:nth-child(10)');
// const image11 = document.querySelector('#odd img:nth-child(11)');
// const image12 = document.querySelector('#odd img:nth-child(12)');

let state = {
  numClicksSoFar:  0,
  numClicksAllowed: 5,
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

  // image4.src = state.allPictures[odd4].imageFile;
  // image4.alt = state.allPictures[odd4].name;

  // state.allPictures[odd4].views++;

  // image5.src = state.allPictures[odd5].imageFile;
  // image5.alt = state.allPictures[odd5].name;

  // state.allPictures[odd5].views++;

  // image6.src = state.allPictures[odd6].imageFile;
  // image6.alt = state.allPictures[odd6].name;

  // state.allPictures[odd6].views++;

  // image7.src = state.allPictures[odd7].imageFile;
  // image7.alt = state.allPictures[odd7].name;

  // state.allPictures[odd7].views++;

  // image8.src = state.allPictures[odd8].imageFile;
  // image8.alt = state.allPictures[odd8].name;

  // state.allPictures[odd8].views++;

  // image9.src = state.allPictures[odd9].imageFile;
  // image9.alt = state.allPictures[odd9].name;

  // state.allPictures[odd9].views++;

  // image10.src = state.allPictures[odd10].imageFile;
  // image10.alt = state.allPictures[odd10].name;

  // state.allPictures[odd10].views++;

  // image11.src = state.allPictures[odd11].imageFile;
  // image11.alt = state.allPictures[odd11].name;

  // state.allPictures[odd11].views++;

  // image12.src = state.allPictures[odd12].imageFile;
  // image12.alt = state.allPictures[odd12].name;

  // state.allPictures[odd12].views++;

  // image13.src = state.allPictures[odd13].imageFile;
  // image13.alt = state.allPictures[odd13].name;

  // state.allPictures[odd13].views++;

  // image14.src = state.allPictures[odd14].imageFile;
  // image14.alt = state.allPictures[odd14].name;

  // state.allPictures[odd14].views++;

  // image15.src = state.allPictures[odd15].imageFile;
  // image15.alt = state.allPictures[odd15].name;

  // state.allPictures[odd15].views++;

  // image16.src = state.allPictures[odd16].imageFile;
  // image16.alt = state.allPictures[odd16].name;

  // state.allPictures[odd16].views++;

  // image17.src = state.allPictures[odd17].imageFile;
  // image17.alt = state.allPictures[odd17].name;

  // state.allPictures[odd17].views++;

  // image18.src = state.allPictures[odd18].imageFile;
  // image18.alt = state.allPictures[odd18].name;

  // state.allPictures[odd18].views++;

  // image19.src = state.allPictures[odd19].imageFile;
  // image19.alt = state.allPictures[odd19].name;

  // state.allPictures[odd19].views++;
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



