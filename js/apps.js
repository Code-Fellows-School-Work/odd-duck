'use strict';

// Global variables

let state = {
  numClicksSoFar:  0,
  numClicksAllowed: 25,
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
function renderVotes (){
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

renderVotes();
