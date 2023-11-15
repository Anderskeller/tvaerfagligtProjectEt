// Extract labels and data from the array
let labels = data.map(item => item.GenreName);
let revenueData = data.map(item => item.TotalRevenue);

let labels2 = data2.map(item => item.GenreName2);
let revenueData2 = data2.map(item => item.TotalRevenue2);

/// Definerer det oprindelige dataset til grafen, inklusive labels og data.
let ctx = document.getElementById('dataChart').getContext('2d');


// Opsætning af første graf
let overAllData = {
    labels: labels,
    datasets: [{
        label: 'Dataset 1',
        data: revenueData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }],

};
// Opsætning af usaDataGraf
let usaData = {
    labels: labels2,
    datasets2: [{
        label: 'Dataset 2',
        data: revenueData2,
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }],
};

let myBarChart = new Chart(ctx, {
    type: 'bar',
    data: overAllData,
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: "Open Sans",
                        size: "16px",
                        spacing: "2",

                    }
                }
            }
        }
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
function updateChartData(dataKey) {
    switch (dataKey) {
        case 'overall':
            myBarChart.data.datasets[0].data = revenueData;
            break;
        case 'usa':
            myBarChart.data.labels = labels2;
            myBarChart.data.datasets[0].data = revenueData2;
            break;
        default:
            console.error('Invalid data key');
            return;
    }
    myBarChart.update();
}


/// interactive buttons
document.getElementById('overallBtn').addEventListener('click', function() {
    updateChartData('overall');
});

document.getElementById('usaBtn').addEventListener('click', function() {
    updateChartData('usa');
});

document.getElementById('swedenBtn').addEventListener('click', function() {
    updateChartData('sweden');
});

document.getElementById('japanBtn').addEventListener('click', function() {
    updateChartData('japan');
});

document.getElementById('ukBtn').addEventListener('click', function() {
    updateChartData('uk');
});


console.log(revenueData)
console.log(revenueData2)