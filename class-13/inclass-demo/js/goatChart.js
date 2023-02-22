'use strict';

let retreivedGoats = localStorage.getItem('myGoats');

let parsedGoats = JSON.parse(retreivedGoats);

let canvasElem = document.getElementById('my-chart');

function renderChart() {

  let goatNames = [];
  let goatVotes = [];
  let goatViews = [];

  for (let i = 0; i < parsedGoats.length; i++) {
    goatNames.push(parsedGoats[i].name);
    goatVotes.push(parsedGoats[i].votes);
    goatViews.push(parsedGoats[i].views);
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

   new Chart(canvasElem, chartObj); //eslint-disable-line
}

if(retreivedGoats){
  renderChart();
}
