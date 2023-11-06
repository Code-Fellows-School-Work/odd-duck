'use strict';

// Global variables

const image1 = document.querySelector('#odd img: first-child');
const image2 = document.querySelector('#odd img: nth-child(2)');
const image3 = document.querySelector('#odd img: nth-child(3)');

let state = {
  numClicksSoFar:  0,
  numClicksAllowed: 5,
  allPictures: [],
};

// Declare classes, constructors, prototypes

function Pictures(name, image) {
  this.name = name;
  this.imageFile = image;
  this.votes = 0;
  this.views = 0;
  state.allPictures.push(this);
}

// Declare helper functions
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
}

// Run meaningful code

renderPageImages();

image1.src = state.allPictures[odd1].imageFile++;
image1.alt = state.allPictures[odd1].imageFile++;

state.allPictures[odd1].views++;

image2.src = state.allPictures[odd2].imageFile++;
image2.alt = state.allPictures[odd2].imageFile++;

state.allPictures[odd2].views++;

image3.src = state.allPictures[odd3].imageFile++;
image3.alt = state.allPictures[odd3].imageFile++;

state.allPictures[odd4].views++;

image4.src = state.allPictures[odd4].imageFile++;
image4.alt = state.allPictures[odd4].imageFile++;

state.allPictures[odd4].views++;

image5.src = state.allPictures[odd5].imageFile++;
image5.alt = state.allPictures[odd5].imageFile++;

state.allPictures[odd5].views++;

image6.src = state.allPictures[odd6].imageFile++;
image6.alt = state.allPictures[odd6].imageFile++;

state.allPictures[odd6].views++;

image7.src = state.allPictures[odd7].imageFile++;
image7.alt = state.allPictures[odd7].imageFile++;

state.allPictures[odd7].views++;

image8.src = state.allPictures[odd8].imageFile++;
image8.alt = state.allPictures[odd8].imageFile++;

state.allPictures[odd8].views++;

image9.src = state.allPictures[odd9].imageFile++;
image9.alt = state.allPictures[odd9].imageFile++;

state.allPictures[odd9].views++;

image10.src = state.allPictures[odd10].imageFile++;
image10.alt = state.allPictures[odd10].imageFile++;

state.allPictures[odd10].views++;

image11.src = state.allPictures[odd11].imageFile++;
image11.alt = state.allPictures[odd11].imageFile++;

state.allPictures[odd11].views++;

image12.src = state.allPictures[odd12].imageFile++;
image12.alt = state.allPictures[odd12].imageFile++;

state.allPictures[odd12].views++;

image13.src = state.allPictures[odd13].imageFile++;
image13.alt = state.allPictures[odd13].imageFile++;

state.allPictures[odd13].views++;

image14.src = state.allPictures[odd14].imageFile++;
image14.alt = state.allPictures[odd14].imageFile++;

state.allPictures[odd14].views++;

image15.src = state.allPictures[odd15].imageFile++;
image15.alt = state.allPictures[odd15].imageFile++;

state.allPictures[odd15].views++;

image16.src = state.allPictures[odd16].imageFile++;
image16.alt = state.allPictures[odd16].imageFile++;

state.allPictures[odd16].views++;

image17.src = state.allPictures[odd17].imageFile++;
image17.alt = state.allPictures[odd17].imageFile++;

state.allPictures[odd17].views++;

image18.src = state.allPictures[odd18].imageFile++;
image18.alt = state.allPictures[odd18].imageFile++;

state.allPictures[odd18].views++;

image19.src = state.allPictures[odd19].imageFile++;
image19.alt = state.allPictures[odd19].imageFile++;

state.allPictures[odd19].views++;
