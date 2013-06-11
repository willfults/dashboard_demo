$(document).ready(function () {
	$(".dial").knob();
	window.setInterval(function(){
	  $('.dial')
	    .val(Math.floor((Math.random()*100)+1))
	    .trigger('change');
	}, 3000);
});




