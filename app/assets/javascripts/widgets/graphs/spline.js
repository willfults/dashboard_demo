$(function () {

        $.getJSON('spline.json', function(data) {
        	$('#spline').highcharts({
	            chart: {
	                type: 'areaspline',
	                height: 360,
	            },
	            title: {
	                text: 'Sales last seven days'
	            },
	            legend: {
	                layout: 'vertical',
	                align: 'left',
	                verticalAlign: 'top',
	                x: 150,
	                y: 100,
	                floating: true,
	                borderWidth: 1,
	                backgroundColor: '#FFFFFF'
	            },
	            xAxis: {
	                categories: [
	                    'Sunday',
	                    'Monday',
	                    'Tuesday',
	                    'Wednesday',
	                    'Thursday',
	                    'Friday',
	                    'Saturday'
	                ],
	                plotBands: [{ // visualize the weekend
	                    from: 4.5,
	                    to: 6.5,
	                    color: 'rgba(68, 170, 213, .2)'
	                }]
	            },
	            yAxis: {
	                title: {
	                    text: 'In thousands'
	                }
	            },
	            tooltip: {
	                shared: true,
	                valueSuffix: ' thousand'
	            },
	            credits: {
	                enabled: false
	            },
	            plotOptions: {
	                areaspline: {
	                    fillOpacity: 0.5
	                }
	            },
	            series: data
	        });
        }).error(function(data, data2, data3) { console.log("error" , data, data2, data3); });
            
    });
    
