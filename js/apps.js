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

// Declare functions


// Run meaningful code
