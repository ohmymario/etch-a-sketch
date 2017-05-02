$(document).ready(function () {

	var g_size = 50;

	for (i = 0; i < g_size*g_size; i++) {
		var $row = $("<div class=sketch></div>");
		$(".container").append($row);
	}


	var calc = 500 / g_size;
	

	$(".sketch").css({
		"width": calc + "px"

	});
	$(".sketch").css({
		'height': calc + 'px'

	});

var colorChange = function(){
	$(".sketch").on('mouseenter', function(){
		$(this).css({'background-color': 'orange'});
	});
}

colorChange();
	

});
