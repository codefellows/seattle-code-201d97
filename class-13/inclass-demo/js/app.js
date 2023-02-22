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
document.querySelector('h3').style.visibility = 'hidden';

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
  let imgOneIndex = randomIndex();
  let imgTwoIndex = randomIndex();

  while (imgOneIndex === imgTwoIndex) {
    imgTwoIndex = randomIndex();
  }

  imgOne.src = goatArray[imgOneIndex].image;
  imgOne.title = goatArray[imgOneIndex].name;
  imgOne.alt = `this is an image of ${goatArray[imgOneIndex].name}`;
  imgTwo.src = goatArray[imgTwoIndex].image;
  imgTwo.title = goatArray[imgTwoIndex].name;
  imgTwo.alt = `this is an image of ${goatArray[imgTwoIndex].name}`;

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

  Chart.defaults.font.size = 20; //eslint-disable-line
  Chart.defaults.font.weight = 'bold'; //eslint-disable-line

  let chartObj = {
    type: 'bar',
    data: {
      labels: goatNames, // ** GOAT NAMES labels needs an array
      datasets: [{
        label: '# Of Votes',
        data: goatVotes, // *** GOAT VOTES - needed an array
        borderWidth: 5,
        backgroundColor: ['#ff006e'],
        borderColor: ['#ff006e']
      },
      {
        label: '# of Views',
        data: goatViews, // *** GOAT VIEWS - needed an array
        borderWidth: 5,
        backgroundColor: ['#8338ec'],
        borderColor: ['#8338ec']
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: 'white' }
        },
        x: {
          ticks: { color: 'white' }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: 'white',
            padding: 30,
            font: {
              size: 16
            }
          },
        }
      }
    }
  };

   new Chart(ctx, chartObj); //eslint-disable-line
}


// ****** EVENT HANDLERS *******
function handleImgClick(event) {

  let imgClicked = event.target.title;

  for (let i = 0; i < goatArray.length; i++) {
    if (imgClicked === goatArray[i].name) {
      goatArray[i].votes++;
      votingRounds--;
      renderImg();
    }
  }

  if (votingRounds === 0) {
    imgContainer.removeEventListener('click', handleImgClick);
    document.querySelector('h3').style.visibility = 'visible';

    // ***** LOCAL STORAGE STARTS HERE *****
    // ! STEP 1 - CONVERT OUR DATA TO A STRING TO STORE IN LOCAL STORAGE
    let stringifiedGoats = JSON.stringify(goatArray);

    console.log('Stringifed Goats >>> ', stringifiedGoats);

    // ! STEP 2 - SET STRINGIFIED GOATS INTO LOCAL STORAGE
    localStorage.setItem('myGoats', stringifiedGoats);
  }
}

function handleShowResults() {
  if (votingRounds === 0) {

    renderChart();

    resultsBtn.removeEventListener('click', handleShowResults);
  }
}

// ***** EXECTUABLE CODE ******

// ******** LOCALS STORAGE CONTINUES... ******

// ! STEP 3 - GET INFO FROM LOCAL STORAGE
let retreivedGoats = localStorage.getItem('myGoats');

console.log('Goats from LS >>>', retreivedGoats);

// ! STEP 4  - CONVERT BACK TO USEABLE CODE
let parsedGoats = JSON.parse(retreivedGoats);

console.log('Parsed Goats >>>>', parsedGoats);


// ******** REBUILD GOATS USING THE CONSTRUCTOR *********

if(retreivedGoats){
  for(let i = 0; i < parsedGoats.length; i++){
    if(parsedGoats[i].name === 'bunny-goat'){
      let reconstructedBunnyGoat = new Goat(parsedGoats[i].name, 'png');
      reconstructedBunnyGoat.views = parsedGoats[i].views;
      reconstructedBunnyGoat.votes = parsedGoats[i].votes;
      goatArray.push(reconstructedBunnyGoat);
    } else {
      let reconstructedGoat = new Goat(parsedGoats[i].name);
      reconstructedGoat.views = parsedGoats[i].views;
      reconstructedGoat.votes = parsedGoats[i].votes;
      goatArray.push(reconstructedGoat);
    }
  }

} else {
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
}

// ***** HAPPY PATH OUT OF THE WOODS ********

// if(retreivedGoats){
//   goatArray = parsedGoats;
// } else {
//   let bunnyGoat = new Goat('bunny-goat', 'png');
//   let coolGoat = new Goat('cool-goat');
//   let cruisinGoat = new Goat('cruisin-goat');
//   let floatGoat = new Goat('float-your-goat');
//   let goatHand = new Goat('goat-out-of-hand');
//   let kissingGoat = new Goat('kissing-goat');
//   let sassyGoat = new Goat('sassy-goat');
//   let smilingGoat = new Goat('smiling-goat');
//   let sweaterGoat = new Goat('sweater-goat');

//   goatArray.push(bunnyGoat, coolGoat, cruisinGoat, floatGoat, goatHand, kissingGoat, sassyGoat, smilingGoat, sweaterGoat);
// }

renderImg();

imgContainer.addEventListener('click', handleImgClick);
resultsBtn.addEventListener('click', handleShowResults);
