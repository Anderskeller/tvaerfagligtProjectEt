// Extract labels and data from the array
let labels = data.map(item => item.GenreName);
let revenueData = data.map(item => item.TotalRevenue);

let labels2 = data.map(item => item.GenreName2);
let revenueData2 = data.map(item => item.TotalRevenue2);

/// Definerer det oprindelige dataset til grafen, inklusive labels og data.
let ctx = document.getElementById('dataChart').getContext('2d');


// Opsætning af første graf
let overAllData = {
    labels: labels,
    datasets: [{
        label: labels,
        data: revenueData,
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
// Opsætning af usaDataGraf
let usaData = {
    labels: labels2,
    datasets2: [{
        label: labels2,
        data: revenueData2,
        type: 'bar',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};

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




