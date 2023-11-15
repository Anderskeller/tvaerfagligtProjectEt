let countryData = {
    'Overall':[124,111,67,21,52],
    'USA':[122,1141,222,11,5],
    'Sweden':[122,1141,222,11,5],
    'Japan':[122,1141,222,11,5],
    'United Kingdom':[122,1141,222,11,5]

}


// Opsætning af første graf
let overAllData = {
    labels: ['Rock', 'Pop', 'Rap', 'Country', 'Soul R&B'],
    datasets: [{
        label: 'Overall',
        data: countryData,
        type: 'bar',
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        display:false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display:false
                    }
                }]
            }
        }



    }]
};


/// Definerer det oprindelige dataset til grafen, inklusive labels og data.
let ctx = document.getElementById('dataChart').getContext('2d');

let myBarChart = new Chart(ctx, {
    data: overAllData,
    options:{
        plugins:{
            legend:{
                labels:{
                    font:{
                        family: "Open Sans",
                        style: "sans-serif",
                        size: "16px",
                        spacing: "2",
                        textDecoration:"none",
                        transform: "uppercase",
                    }
                }
            }
        }
    },

});


// Listener for browser dimensions
window.addEventListener('resize', function() {
    resizeChart();
});

// Function updatere canvas
function resizeChart() {
    let canvas = document.getElementById('dataChart');
    let canvasWrapper = document.getElementById('canvasWrapper');

    // sætter canvas til at tilpasse wrapper
    canvas.width = canvasWrapper.clientWidth;
    canvas.height = canvasWrapper.clientHeight;

    // resize
    myBarChart.resize();
    myBarChart.update();
}


/// Update når man trykker på knapperne
function updateChartData(country) {
    let newData = countryData[country];

    if (newData) {
    myBarChart.data.datasets[0].label = country;
    myBarChart.data.datasets[0].data = newData;
    myBarChart.update();
    }
    else{ alert("error")}
}

/// interactive buttons
document.getElementById('overallBtn').addEventListener('click', function() {
    updateChartData('Overall');
});

document.getElementById('usaBtn').addEventListener('click', function() {
    updateChartData('USA');
});

document.getElementById('swedenBtn').addEventListener('click', function() {
    updateChartData('Sweden');
});

document.getElementById('japanBtn').addEventListener('click', function() {
    updateChartData('Japan');
});

document.getElementById('ukBtn').addEventListener('click', function() {
    updateChartData('United Kingdom');
});




