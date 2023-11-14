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


/// Tegner grafen
let ctx = document.getElementById('dataChart').getContext('2d');

/// definition af første graf
let dataChart = new Chart(ctx, {
    type: 'bar',

    /// Benytter options fra 1-10
    data: overAllData,
    options: {
    }
});

// Update chart dimensions on window resize
window.addEventListener('resize', function() {
    resizeChart();
});

// Function to update chart dimensions
function resizeChart() {
    let canvas = document.getElementById('dataChart');
    let canvasWrapper = document.getElementById('canvasWrapper');

    // Set canvas dimensions to its parent container's dimensions
    canvas.width = canvasWrapper.clientWidth;
    canvas.height = canvasWrapper.clientHeight;

    // Redraw the chart
    dataChart.resize();
    dataChart.update();
}

/// call function
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


/// Update function
function updateChartData(country, newData) {
    dataChart.data.datasets[0].label = country;
    dataChart.data.datasets[0].data = newData;
    dataChart.update();
}

