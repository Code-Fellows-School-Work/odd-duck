'use strict';

// Global variables

// find my stuff
const imagesContainer = document.getElementById('odd');
const reportContainer = document.getElementById('myChart');
const button = document.getElementById('showResults');
// find where to click
const image1 = document.querySelector('.odd1 img');
const image2 = document.querySelector('.odd2 img');
const image3 = document.querySelector('.odd3 img');

let state = {
  numClicksSoFar:  0,
  numClicksAllowed: 25,
  allPictures: [],
  usedPictures: new Set(),
};

// Pictures contructor function, takes declared pictures below, gives all these properties, then pushes into allPictures array
function Pictures(name, img) {
  this.name = name;
  this.imageFile = img;
  this.votes = 0;
  this.views = 0;
  state.allPictures.push(this);
}

// add local storage to save clicks and view per refresh
let storage = localStorage.getItem('savedPictures');

if (storage) {
  state.allPictures = JSON.parse(storage);
} else {
  new Pictures('bag', 'img/bag.jpg');
  new Pictures('banana', 'img/banana.jpg');
  new Pictures('bathroom', 'img/bathroom.jpg');
  new Pictures('boots', 'img/boots.jpg');
  new Pictures('breakfast', 'img/breakfast.jpg');
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
}

// Helper functions

// render images, ensures two of the same images doesn't show at the same time, ensures same images don't show on duplicate iterations
function renderPageImages (){
  function pickRandomPicture (){
    return Math.floor(Math.random() * state.allPictures.length);
  }

  let currentSet = new Set();

  let odd1 = pickRandomPicture();
  while (state.usedPictures.has(odd1)){
    odd1 = pickRandomPicture();
  }
  currentSet.add(odd1);

  let odd2 = pickRandomPicture();
  while (state.usedPictures.has(odd2) || odd2 === odd1){
    odd2 = pickRandomPicture();
  }
  currentSet.add(odd2);

  let odd3 = pickRandomPicture();
  while (state.usedPictures.has(odd3) || odd3 === odd1 || odd3 === odd2) {
    odd3 = pickRandomPicture();
  }
  currentSet.add(odd3);

  state.usedPictures = currentSet;

  console.log('Image 1 Name:', state.allPictures[odd1].name);
  console.log('Image 2 Name:', state.allPictures[odd2].name);
  console.log('Image 3 Name:', state.allPictures[odd3].name);

  // puts images on screen
  image1.src = state.allPictures[odd1].imageFile;
  image1.alt = state.allPictures[odd1].name;

  image2.src = state.allPictures[odd2].imageFile;
  image2.alt = state.allPictures[odd2].name;

  image3.src = state.allPictures[odd3].imageFile;
  image3.alt = state.allPictures[odd3].name;

  state.allPictures[odd1].views++;
  state.allPictures[odd2].views++;
  state.allPictures[odd3].views++;
}
// Run meaningful code

// display results button
function renderResultsButton() {
  button.style.display = 'block';
}
// render text results and bar graph
function renderResults() {
  const resultsContainer = document.getElementById('report');
  resultsContainer.innerHTML = ''; // Clear previous results

  // Loop through all Pictures and display results
  state.allPictures.forEach((picture) => {
    const resultItem = document.createElement('p');
    resultItem.textContent = `${picture.name}: Votes - ${picture.votes}, Seen - ${picture.views}`;
    resultsContainer.appendChild(resultItem);
  });

  // display barchart of votes and views
  let imageName = [];
  let imageVotes = [];
  let imageViews = [];

  for (let i = 0; i < state.allPictures.length; i ++) {
    imageName.push(state.allPictures[i].name);
    imageVotes.push(state.allPictures[i].votes);
    imageViews.push(state.allPictures[i].views);
  }
  // bar graph
  const data = {
    labels: imageName,
    datasets: [
      {
        label: 'Votes',
        data: imageVotes,
        borderWidth: 1,
        backgroundColor: 'blue'
      },
      {
        label: 'Views',
        data: imageViews,
        borderWidth: 1,
        backgroundColor: 'red'
      }
    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  const myChart = new Chart(reportContainer, config);
}
// display buttom to show text results and bar graph
function startListeners() {
  const button = document.getElementById('showResults');
  button.addEventListener('click', renderResults);

  imagesContainer.addEventListener('click', handleClick);
  button.addEventListener('click', renderResults);
}
// enable image clicking
function handleClick(event){
  let pictureName = event.target.alt;

  for (let i = 0; i < state.allPictures.length; i++) {
    if (pictureName === state.allPictures[i].name) {
      state.allPictures[i].votes++;
      break;
    }
  }

  state.numClicksSoFar++;

  let stringifiedItems = JSON.stringify(state.allPictures);
  localStorage.setItem('savedPictures', stringifiedItems);

  if (state.numClicksSoFar >= state.numClicksAllowed) {
    removeListener();
    renderResultsButton();
  } else {
    renderPageImages();
  }
}

// remove image clicking
function removeListener() {
  imagesContainer.removeEventListener('click', handleClick);
}

renderPageImages();
startListeners();
