

// Opsætning af første graf
let overAllData = {
    labels: ['Rock', 'Pop', 'Rap', 'Country', 'Soul R&B'],

    datasets: [{
        label: 'Overall ',
        data: [50, 23, 10, 55, 22],
        type: 'bar',
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,



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
    },scales: {
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
function updateChartData(country, newData) {
    myBarChart.data.datasets[0].label = country;
    myBarChart.data.datasets[0].data = newData;
    myBarChart.update();

}

/// interactive buttons
document.getElementById('overallBtn').addEventListener('click', function() {
    updateChartData('Overall', [50, 23, 10, 55, 22]);
});

document.getElementById('usaBtn').addEventListener('click', function() {
    updateChartData('USA', [15, 25, 20, 30, 35]);
});

document.getElementById('swedenBtn').addEventListener('click', function() {
    updateChartData('Sweden', [20, 30, 25, 35, 40]);
});

document.getElementById('japanBtn').addEventListener('click', function() {
    updateChartData('Japan', [25, 35, 30, 40, 45]);
});

document.getElementById('ukBtn').addEventListener('click', function() {
    updateChartData('United Kingdom', [18, 28, 23, 33, 38]);
});




