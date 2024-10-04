
document.addEventListener('DOMContentLoaded', function () {
    var options1 = {
        series: [{
            name: 'シリーズ1',
            data: [10, 9, 8, 4],
        }],
        chart: {
            height: 500,
            type: 'radar',
        },
        title: {
            text: '投打力'
        },
        xaxis: {
            categories: ['打力', '遠投力', '助走投げ', '立投げ']
        },

        colors: ['#FF4560'] 
    };

    var options2 = {
        series: [{
            name: 'シリーズ2',
            data: [6, 10, 4, 8],
        }],
        chart: {
            height: 500,
            type: 'radar',
        },
        title: {
            text: '筋力'
        },
        xaxis: {
            categories: ['右握力', '左握力', '背筋', 'Jump力']
        },

        colors: ['#008FFB']
    };

    var options3 = {
        series: [{
            name: 'シリーズ3',
            data: [10, 9, 8, 7, 6, 5, 4],
        }],
        chart: {
            height: 500,
            type: 'radar',
        },
        title: {
            text: '守備力'
        },
        xaxis: {
            categories: ['測定値１', '測定値２', '測定値3', '測定値4', '測定値5', '測定値6','測定値7']
        },

        colors: ['#00E396']
    };

    var options4 = {
        series: [{
            name: 'シリーズ4',
            data: [10, 5, 6]
        }],
        chart: {
            height: 500,
            type: 'radar',
        },
        title: {
            text: '走力'
        },
        xaxis: {
            categories: ['瞬発力', '長距離', '短距離']
        },

        colors: ['#775DD0']
    };

    var optionsLineChart = {
        series: [{
            name: '体重推移',
            data: [60, 62, 64, 63, 65, 66, 68, 67, 69, 70]
        }],
        chart: {
            height: 300,
            type: 'line',
        },
        title: {
            text: '体重推移'
        },
        xaxis: {
            categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月']
        }
    };

        var optionsFatPercentage = {
            series: [{
                name: '体脂肪率',
                data: [22, 21, 20, 19, 18, 17, 16, 15, 14, 13]
            }],
            chart: {
                height: 350,
                type: 'line',
            },
            title: {
                text: '体脂肪率の変化'
            },
            xaxis: {
                categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月']
            }
        };
    
        var optionsMuscleMass = {
            series: [{
                name: '筋肉量',
                data: [30, 32, 31, 33, 34, 35, 36, 37, 38, 39]
            }],
            chart: {
                height: 350,
                type: 'line',
            },
            title: {
                text: '筋肉量の変化'
            },
            xaxis: {
                categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月']
            }
        };
    

    var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
    var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
    var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
    var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
    var lineChart = new ApexCharts(document.querySelector("#lineChart"), optionsLineChart);
    var fatPercentageChart = new ApexCharts(document.querySelector("#fatPercentageChart"), optionsFatPercentage);
        var muscleMassChart = new ApexCharts(document.querySelector("#muscleMassChart"), optionsMuscleMass);

    chart1.render();
    chart2.render();
    chart3.render();
    chart4.render();
    lineChart.render();
    fatPercentageChart.render();
    muscleMassChart.render();
    
})