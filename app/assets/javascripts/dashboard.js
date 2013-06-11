
var gridster = "";
$(document).ready(function () {
    $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [180, 180]
    });
    

	$('#save-gridster').click(function(){
		//$('.gridster').html() must run before onload
      	$.cookie('layout', $('.gridster').html(), { expires: 7000, path: '/'  });
    });
    
    //hide non IE elements
    if (/*@cc_on!@*/false) {
	  $(".noie").css("display","none");
	}
    $('#fullscreen').click(function(){
    	$(document).fullScreen(true);
    });
    
    $('.icon-trash').click(function(){
    	var gridsters = $(".gridster ul").gridster().data('gridster');
    	var element = $(this).parent() 
    	bootbox.confirm("Are you sure you want to delete this widget?", function(result) {
			if(result){
				gridsters.remove_widget(element);
			}
		}); 
    });
});

 function deleteWidget(id){
	 var gridsters = $(".gridster ul").gridster().data('gridster');
	 gridsters.remove_widget( $('#' + id) );
 }
 
 function addWidget(){
 	 var gridstered = $(".gridster ul").gridster().data('gridster');
 	gridstered.add_widget('<li class="new" style="background-color: black">A new example widget, draggable...</li>', 1, 1, 1, 1);
 }
