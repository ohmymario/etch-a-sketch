$(document).ready(function () {
	
	
	/*@desc amount of squares horizontally + vertically 
	then uses a loop to add them into the container*/
	var g_size = 16;

	for (i = 0; i < g_size * g_size; i++) {
		var $row = $("<div class=sketch></div>");
		$(".container").append($row);
	}

	//@desc obtains the correct sizing for the squares being added in. 
	var calc = 500 / g_size;
	
	$(".sketch").css({
		"width": calc + "px"
	});
	$(".sketch").css({
		'height': calc + "px"
	});


	// @desc gives #303832 color when mouse touches div with a class of sketch
	var colorChange = function () {
		$(".sketch").on('mouseenter', function () {
			$(this).addClass("sketch-active");
		});
	}
	colorChange(); 

	// @desc this removes the color that was added from colorChange
	$(".remove").on('click', function () {
		$("div").removeClass("sketch-active");
	});
});
