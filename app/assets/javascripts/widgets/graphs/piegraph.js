$(function () {
    	
    	// Radialize the colors
		Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function(color) {
		    return {
		        radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
		        stops: [
		            [0, color],
		            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
		        ]
		    };
		});
		
		$.getJSON('sample.json', function(data) {
			$.each(data, function (i, point) {
			    point.y = point.data;
			});
			// Build the chart
	        $('#piechart').highcharts({
	            chart: {
	                plotBackgroundColor: null,
	                plotBorderWidth: null,
	                plotShadow: false,
	                height: 340,
	            },
	            title: {
	                text: 'CallSource sales by division'
	            },
	            tooltip: {
	        	    pointFormat: '{series.name}: <b>{point.percentage}%</b>',
	            	percentageDecimals: 1
	            },
	            plotOptions: {
	                pie: {
	                    allowPointSelect: true,
	                    cursor: 'pointer',
	                    dataLabels: {
	                        enabled: true,
	                        color: '#000000',
	                        connectorColor: '#000000',
	                        formatter: function() {
	                            return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
	                        }
	                    }
	                }
	            },
	            series: [{
	                type: 'pie',
	                name: 'Market share',
	                data: data
	            }]
	        });
		});
		

				

    });
    
    
