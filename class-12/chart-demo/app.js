'use strict';

const ctx = document.getElementById('myChart');
// chartObj.data.labels[0]
let chartObj = {
  type: 'bar',
  data: {
    labels: ['Cats', 'Dogs', 'Birds', 'Piggies', 'Goats', 'Chickens'],
    datasets: [{
      label: 'Level of cuteness',
      data: [12, 19, 3, 5, 22, 3],
      borderWidth: 5,
      backgroundColor: ['pink'],
      borderColor: ['pink']
    },
    {
      label: 'Level of cuddliness',
      data: [12, 19, 10, 25, 22, 3],
      borderWidth: 5,
      backgroundColor: ['black'],
      borderColor: ['black']
    },
    {
      label: 'Level of stuff',
      data: [12, 19, 10, 25, 22, 3],
      borderWidth: 5,
      backgroundColor: ['blue'],
      borderColor: ['blue']
    }
  ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
};



new Chart(ctx, chartObj);
