let overAllData = {
    labels: ['Rock', 'Pop', 'Rap', 'Country', 'Soul R&B'],
    datasets: [{
        label: 'Overall ',
        data: [10, 20, 15, 25, 30],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};


/// Definerer det oprindelige dataset til grafen, inklusive labels og data.
let ctx = document.getElementById('myBarChart').getContext('2d');

/// definition af første graf
let myBarChart = new Chart(ctx, {
    type: 'bar',

    /// Benytter data
    data: overAllData,
    options: {
    }
});

// Listener for browser dimensions
window.addEventListener('resize', function() {
    resizeChart();
});

// Function updatere canvas
function resizeChart() {
    let canvas = document.getElementById('myBarChart');
    let canvasWrapper = document.getElementById('canvasWrapper');

    // sætter canvas til at tilpasse wrapper
    canvas.width = canvasWrapper.clientWidth;
    canvas.height = canvasWrapper.clientHeight;

    // resize
    myBarChart.resize();
    myBarChart.update();
}

resizeChart();



/// interactive buttons
document.getElementById('overallBtn').addEventListener('click', function() {
    updateChartData('Overall', [15, 25, 20, 30, 35]);
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


/// Update når man trykker på knapperne
function updateChartData(country, newData) {
    myBarChart.data.datasets[0].label = country;
    myBarChart.data.datasets[0].data = newData;
    myBarChart.update();

}

