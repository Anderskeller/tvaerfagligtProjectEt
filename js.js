// Extract labels and data from the array and create new a array
let labels = data.map(item => item.GenreName);
let revenueData = data.map(item => item.TotalRevenue);

let labels2 = data2.map(item => item.GenreName2);
let revenueData2 = data2.map(item => item.TotalRevenue2);

let labels3 = data3.map(item => item.GenreName3);
let revenueData3 = data3.map(item => item.TotalRevenue3);

let labels4 = data4.map(item => item.GenreName4);
let revenueData4 = data4.map(item => item.TotalRevenue4);

let labels5 = data5.map(item => item.GenreName5);
let revenueData5 = data5.map(item => item.TotalRevenue5);

let labels6 = data6.map(item => item.Country);
let revenueData6 = data6.map(item => item.TotalSales);

/// Definerer det oprindelige dataset til grafen, inklusive labels og data.
let ctx = document.getElementById('dataChart').getContext('2d');


// Opsætning af første graf
let overAllData = {
    labels: labels,
    datasets: [{
        label: 'Dataset 1',
        data: revenueData,
        backgroundColor: 'rgba(255,102,86,0.89)',
        borderColor: 'rgb(255,102,86)',
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
        case 'denmark':
            myBarChart.data.labels = labels3;
            myBarChart.data.datasets[0].data = revenueData3;
            break;
        case 'canada':
            myBarChart.data.labels = labels4;
            myBarChart.data.datasets[0].data = revenueData4;
            break;
        case 'United Kingdom':
            myBarChart.data.labels = labels5;
            myBarChart.data.datasets[0].data = revenueData5;
            break;
        case 'Top Selling Countries':
            myBarChart.data.labels = labels6;
            myBarChart.data.datasets[0].data = revenueData6;
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

document.getElementById('denmarkBtn').addEventListener('click', function() {
    updateChartData('denmark');
});

document.getElementById('canadaBtn').addEventListener('click', function() {
    updateChartData('canada');
});

document.getElementById('ukBtn').addEventListener('click', function() {
    updateChartData('United Kingdom');
});

document.getElementById('topSellingBtn').addEventListener('click', function() {
    updateChartData('Top Selling Countries');
});
