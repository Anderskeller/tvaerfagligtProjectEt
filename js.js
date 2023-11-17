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

let labelsAlbum = dataAlbumOA.map(item => item.AlbumTitle);
let revenueDataAlbum = dataAlbumOA.map(item => item.TotalRevenueAlbum);

// let labelsAlbum
let labelsAlbumUSA = dataAlbumUSA.map(item => item.AlbumTitleUSA)
let revenueDataAlbumUSA = dataAlbumUSA.map(item => item.TotalRevenueAlbumUSA);


// Top selling artist data /// Anders
let labelsTopSellingOverall = dataArtistOverall.map(item => item.ArtistName);
let revenueDataTopSellingOverall = dataArtistOverall.map(item => item.TotalSales);

let labelsTopSellingUSA = dataArtistUSA.map(item => item.ArtistName);
let revenueDataTopSellingUSA = dataArtistUSA.map(item => item.TotalSales);


/// Victor
let ctx = document.getElementById('dataChart').getContext('2d');

/// Kasper
let ctx2 = document.getElementById('dataChart2').getContext('2d');

/// Anders
let ctx3 = document.getElementById('dataChart3').getContext('2d');


// Opsætning af første graf /// Victor
let overAllData = {
    labels: labels,
    datasets: [{
        label: 'Total revenue',
        data: revenueData,
        backgroundColor: [
            '#232D3F',
            '#3C485D',
            '#546573',
            '#6D7F8C',
            '#859AA5',
            '#9CAFBF',
        ],
    }],
};

// Opsætning af anden graf /// Kasper
let overAllData2 = {
    labels: labels,
    datasets: [{
        label: 'Total revenue',
        data: revenueDataAlbum,
        backgroundColor: [
            '#232D3F',
            '#3C485D',
            '#546573',
            '#6D7F8C',
            '#859AA5',
            '#9CAFBF',
        ],

    }],
};

// Opsætning af tredje graf /// Anders
let overAllData3 = {
    labels: labels,
    datasets: [{
        label: 'Total revenue',
        data: revenueData,
        backgroundColor: [
            '#232D3F',
            '#3C485D',
            '#546573',
            '#6D7F8C',
            '#859AA5',
            '#9CAFBF',
        ],
    }],
};

/// Victor
let myBarChart = new Chart(ctx, {
    type: 'bar',
    data: overAllData,
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Hide x-axis gridlines
                }
            },
            y: {
                grid: {
                    display: false // Hide y-axis gridlines
                }
            }
        },
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
/// Kasper
let myBarChart2 = new Chart(ctx2, {
    type: 'bar',
    data: overAllData2,
    options: {scales: {
            x: {
                grid: {
                    display: false // Hide x-axis gridlines
                }
            },
            y: {
                grid: {
                    display: false // Hide y-axis gridlines
                }
            }
        },
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
/// Anders
let myBarChart3 = new Chart(ctx3, {
    type: 'bar',
    data: overAllData3,
    options: {scales: {
            x: {
                grid: {
                    display: false // Hide x-axis gridlines
                }
            },
            y: {
                grid: {
                    display: false // Hide y-axis gridlines
                }
            }
        },
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
        }, indexAxis: 'y',
    }

});

// Listener for browser dimensions /// Victor
window.addEventListener('resize', function() {
    resizeChart();
});

// Function updatere canvas /// Victor
function resizeChart() {
    /// Victor
    let canvas = document.getElementById('dataChart');
    let canvasWrapper = document.getElementById('canvasWrapper');
    /// Kasper
    let canvas2 = document.getElementById('dataChart2');
    let canvasWrapper2 = document.getElementById('canvasWrapper2');
    /// Anders
    let canvas3 = document.getElementById('dataChart3');
    let canvasWrapper3 = document.getElementById('canvasWrapper3');

    // sætter canvas til at tilpasse wrapper
    /// Victor
    canvas.width = canvasWrapper.clientWidth;
    canvas.height = canvasWrapper.clientHeight;
    /// Kasper
    canvas2.width = canvasWrapper2.clientWidth;
    canvas2.height = canvasWrapper2.clientHeight;
    /// Anders
    canvas3.width = canvasWrapper3.clientWidth;
    canvas3.height = canvasWrapper3.clientHeight;

    // resize
    /// Victor
    myBarChart.resize();
    myBarChart.update();
    /// Kasper
    myBarChart2.resize();
    myBarChart2.update();
    /// Anders
    myBarChart3.resize();
    myBarChart3.update();
}


/// Update når man trykker på knapperne


/// Victor
function updateChartData(dataKey) {
    switch (dataKey) {
        case 'overall':
            /// Anders
            myBarChart.data.datasets[0].data = revenueData;
            myBarChart.data.labels = labels;
            myBarChart3.data.datasets[0].data = revenueDataAlbum;
            myBarChart3.data.labels = labels;
            /// Kasper
            myBarChart2.data.labels = labelsAlbum;
            myBarChart2.data.datasets[0].data = revenueDataAlbum;
            myBarChart2.data.labels = labels;
            /// Anders
            myBarChart3.data.labels = labelsTopSellingOverall;
            myBarChart3.data.datasets[0].data = revenueDataTopSellingOverall;
            break;
        case 'usa':
            /// Anders
            myBarChart.data.labels = labels2;
            myBarChart.data.datasets[0].data = revenueData2;
            /// Kasper
            myBarChart2.data.labels = labelsAlbumUSA;
            myBarChart2.data.datasets[0].data = revenueDataAlbumUSA;
            /// Anders
            myBarChart3.data.labels = labelsTopSellingUSA;
            myBarChart3.data.datasets[0].data = revenueDataTopSellingUSA;
            break;
        case 'denmark':
            /// Anders
            myBarChart.data.labels = labels3;
            myBarChart.data.datasets[0].data = revenueData3;
            /// Kasper
            break;
        case 'canada':
            /// Anders
            myBarChart.data.labels = labels4;
            myBarChart.data.datasets[0].data = revenueData4;
            /// Kasper
            break;
        case 'United Kingdom':
            /// Anders
            myBarChart.data.labels = labels5;
            myBarChart.data.datasets[0].data = revenueData5;
            /// Kasper
            break;
        case 'Top Selling Countries':
            /// Anders
            myBarChart.data.labels = labels6;
            myBarChart.data.datasets[0].data = revenueData6;
            break;
        default:
            console.error('Invalid data key');
            return;
    }
    /// Victor
    myBarChart.update();
    /// Kasper
    myBarChart2.update();
    /// Anders
    myBarChart3.update();
}


/// interactive buttons /// Victor & Anders
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
