
var gridster = "";
$(document).ready(function () {
    $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [180, 180]
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
