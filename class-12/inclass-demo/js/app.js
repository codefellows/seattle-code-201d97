'use strict';

console.log('hey there hey!');

// ******* GLOBALS *********
let goatArray = [];
let votingRounds = 15;

// ******* DOM WINDOWS ********
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let resultsBtn = document.getElementById('show-results-btn');
// let resultsList = document.getElementById('results-container');

// ******* CANVAS ELEMENT FOR CHART *****
let ctx = document.getElementById('my-chart');

// ******* CONSTRUCTOR FUNCTION ********
function Goat(name, fileExtension = 'jpg') {
  this.name = name;
  this.image = `img/${name}.${fileExtension}`;
  this.votes = 0;
  this.views = 0;
}

// ****** HELPER FUNCTIONS / UTILITIES ******

function renderImg() {
  // TODO: 2 images on the page
  let imgOneIndex = randomIndex();
  let imgTwoIndex = randomIndex();

  // TODO: Make sure the images are unique
  // ** COMPARE IMG 1 & IMG 2 while they are the same get a new randomIndex
  // ** could you use another form of storage for indexes to do your validation against that? **
  while (imgOneIndex === imgTwoIndex) {
    imgTwoIndex = randomIndex();
  }

  imgOne.src = goatArray[imgOneIndex].image;
  imgOne.title = goatArray[imgOneIndex].name;
  imgOne.alt = `this is an image of ${goatArray[imgOneIndex].name}`;
  imgTwo.src = goatArray[imgTwoIndex].image;
  imgTwo.title = goatArray[imgTwoIndex].name;
  imgTwo.alt = `this is an image of ${goatArray[imgTwoIndex].name}`;

  // TODO: increase the views on the images
  goatArray[imgOneIndex].views++;
  goatArray[imgTwoIndex].views++;
}

function randomIndex() {
  return Math.floor(Math.random() * goatArray.length);
}

// ****** HELPER FUNCTION TO RENDER CHART *****
function renderChart() {

  let goatNames = [];
  let goatVotes = [];
  let goatViews = [];

  for (let i = 0; i < goatArray.length; i++) {
    goatNames.push(goatArray[i].name);
    goatVotes.push(goatArray[i].votes);
    goatViews.push(goatArray[i].views);
  }

  let chartObj = {
    type: 'bar',
    data: {
      labels: goatNames, // ** GOAT NAMES labels needs an array
      datasets: [{
        label: '# Of Votes',
        data: goatVotes, // *** GOAT VOTES - needed an array
        borderWidth: 5,
        backgroundColor: ['pink'],
        borderColor: ['pink']
      },
      {
        label: '# of Views',
        data: goatViews, // *** GOAT VIEWS - needed an array
        borderWidth: 5,
        backgroundColor: ['black'],
        borderColor: ['black']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  };


  // *** 2 args for the Chart Constructor - canvas element, config obj with goat data
   new Chart(ctx, chartObj); //eslint-disable-line
}


// ****** EVENT HANDLERS *******
function handleImgClick(event) {
  // TODO: Identify the image that was clicked
  let imgClicked = event.target.title;
  console.dir(imgClicked);

  // TODO: Increase the number of clicks on that image
  for (let i = 0; i < goatArray.length; i++) {
    if (imgClicked === goatArray[i].name) {
      goatArray[i].votes++;
    }
  }

  // TODO: decrement the voting rounds
  votingRounds--;

  // TODO: Rerender of Imgs
  renderImg();

  // TODO: once votings are done - stop the click
  if (votingRounds === 0) {
    imgContainer.removeEventListener('click', handleImgClick);
    // document.getElementById('show-results-btn').style = 'visiblity: visible';
  }
}

function handleShowResults() {
  if (votingRounds === 0) {

    renderChart();

    resultsBtn.removeEventListener('click', handleShowResults);
  }
}

// ***** EXECTUABLE CODE ******
let bunnyGoat = new Goat('bunny-goat', 'png');
let coolGoat = new Goat('cool-goat');
let cruisinGoat = new Goat('cruisin-goat');
let floatGoat = new Goat('float-your-goat');
let goatHand = new Goat('goat-out-of-hand');
let kissingGoat = new Goat('kissing-goat');
let sassyGoat = new Goat('sassy-goat');
let smilingGoat = new Goat('smiling-goat');
let sweaterGoat = new Goat('sweater-goat');

goatArray.push(bunnyGoat, coolGoat, cruisinGoat, floatGoat, goatHand, kissingGoat, sassyGoat, smilingGoat, sweaterGoat);

renderImg();

imgContainer.addEventListener('click', handleImgClick);
resultsBtn.addEventListener('click', handleShowResults);
