var chart; // global

/**
 * Request data from the server, add it to the graph and set a timeout 
 * to request again
 */
function requestData() {
    $.ajax({
        url: 'data.php',
        success: function(points) {
        console.log(points);
        chart.series[0].setData(points, true); 
/*        points.forEach(function(element) {
            console.log(element);
            var series = chart.series[0],
                    shift = series.data.length > 20; // shift if the series is 
                                                     // longer than 20

                // add the point
                chart.series[0].addPoint(element, true, shift);
                
                // call it again after one second
        }); */           
        setTimeout(requestData, 3000);    
        },
        cache: false
    });
}


$(document).ready(function() {
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart1',
            defaultSeriesType: 'line',
            events: {
                load: requestData
            }
        },
        title: {
            text: 'Temperatura'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000
        },
        yAxis: {
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: 'Temperatura',
                margin: 80
            }
        },
        series: [{
            name: 'Temperatura',
            data: []
        }]
    });        
});


