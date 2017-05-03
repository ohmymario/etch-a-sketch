$(document).ready(function () {


	/*@desc amount of squares horizontally + vertically 
	then uses a loop to add them into the container*/
	var g_size = 16;
	var darkColor = true;
	var rgb = null;

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
	
	
	var rainbowColorPicker = function () {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		rgb = "rgb(" + r + "," + g + "," + b + ")"
		return rgb;
	}

	// @desc gives #303832 color when mouse touches div with a class of sketch
	var colorDark = function () {
			$(".sketch").on('mouseenter', function () {
				$(this).addClass("sketch-active");
			});
		}

	var rainbowColor = function () {
			$(".sketch").on('mouseenter', function () {
				$(this).css('background-color', rainbowColorPicker());
			});
		}


		
/*=======buttons====== */
			
			
		$(".rainbow").on('click', function () {
			darkColor = false;
			rainbowColor();
			colorManage();
		});

		// @desc this removes any colored blocks
		$(".remove").on('click', function () {
			$("div").removeClass("sketch-active");
		});
	
		$(".reset").on('click', function(){
			darkColor = true;
			rgb = null;
			colorManage();
		});
	
	


	var colorManage = function () {

		if (rgb !== null && darkColor == false) {
			rainbowColor();
		} else {
			colorDark();
		}
	}
	colorManage();
});
