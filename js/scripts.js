var chart1; // global
var chart2; // global
var chart3; // global
var chart4; // global
var chart5; // global
/**
 * Request data from the server, add it to the graph and set a timeout 
 * to request again
 */

function requestChart1(){
    $.ajax({
     url: 'data.php?variable=temperatura_interna',
    success: function(points) {
        chart1.series[0].setData(points, true); 
        setTimeout(requestChart1, 3000);    
    },
    cache: false
    });
}


function requestChart2(){
    $.ajax({
     url: 'data.php?variable=humedad_relativa',
    success: function(points) {
        chart2.series[0].setData(points, true); 
        setTimeout(requestChart2, 3000);    
    },
    cache: false
    });
}


function requestChart3(){
    $.ajax({
     url: 'data.php?variable=radiacion',
    success: function(points) {
        chart3.series[0].setData(points, true); 
        setTimeout(requestChart3, 3000);    
    },
    cache: false
    });
}

function requestChart4(){
    $.ajax({
     url: 'data.php?variable=humedad_sustrato_A',
    success: function(points) {
        chart4.series[0].setData(points, true); 
        setTimeout(requestChart4, 3000);    
    },
    cache: false
    });
}


function requestChart5(){
    $.ajax({
     url: 'data.php?variable=humedad_sustrato_B',
    success: function(points) {
        chart5.series[0].setData(points, true); 
        setTimeout(requestChart5, 3000);    
    },
    cache: false
    });
}



$(document).ready(function() {
    
    $('.carousel').carousel({
      interval: 1000 * 5
    });
    /**************************
     *GRAFICA PARA TEMPERATURA
    ***************************/
    chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart1',
            defaultSeriesType: 'line',
            events: {
                load: requestChart1
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
        legend: {
            align: 'left',
            verticalAlign: 'top',
            y: 20,
            floating: true,
            borderWidth: 0
        },
        series: [{
            name: 'Temperatura',
            data: []
        }]
    });        
    /**************************
     *GRAFICA PARA HUMEDAD_RELATIVA
    ***************************/
    chart2 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart2',
            defaultSeriesType: 'line',
            events: {
                load: requestChart2
            }
        },
        title: {
            text: 'Humedad relativa'
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
                text: 'Humedad relativa',
                margin: 80
            }
        },
        legend: {
            align: 'left',
            verticalAlign: 'top',
            y: 20,
            floating: true,
            borderWidth: 0
        },
        series: [{
            name: 'Humedad relativa',
            data: []
        }]
    });        
    /**************************
     *GRAFICA PARA RADIACIÖN
    ***************************/
    chart3 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart3',
            defaultSeriesType: 'line',
            events: {
                load: requestChart3
            }
        },
        title: {
            text: 'Radiacion'
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
                text: 'Radiacion',
                margin: 80
            }
        },
        legend: {
            align: 'left',
            verticalAlign: 'top',
            y: 20,
            floating: true,
            borderWidth: 0
        },
        series: [{
            name: 'Radiacion',
            data: []
        }]
    });        
    /**************************
     *GRAFICA PARA HUMEDAD SUSTRATO A
    ***************************/
    chart4 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart4',
            defaultSeriesType: 'line',
            events: {
                load: requestChart4
            }
        },
        title: {
            text: 'Humedad sustrato A'
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
                text: 'Humedad sustrato A',
                margin: 80
            }
        },
        legend: {
            align: 'left',
            verticalAlign: 'top',
            y: 20,
            floating: true,
            borderWidth: 0
        },
        series: [{
            name: 'Humedad sustrato A',
            data: []
        }]
    });        
    /**************************
     *GRAFICA PARA HUMEDAD SUSTRATO B
    ***************************/
    chart5 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart5',
            defaultSeriesType: 'line',
            events: {
                load: requestChart5
            }
        },
        title: {
            text: 'Humedad sustrato B'
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
                text: 'Humedad sustrato B',
                margin: 80
            }
        },
        legend: {
            align: 'left',
            verticalAlign: 'top',
            y: 20,
            floating: true,
            borderWidth: 0
        },
        series: [{
            name: 'Humedad sustrato B',
            data: []
        }]
    });        

    
    // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("riego");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    $.ajax({
     url: 'encenderMaquina.php?variable=1'
    });
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    
});

