$(document).ready(function () {

	/*@desc amount of squares horizontally + vertically 
	then uses a loop to add them into the container*/
	
	var $paintColor = "";
	
	var defaultColor = "#303832"
	var greys = true;
	var rgb = null;

	
	
	
	var createGrid = function (g_size) {

		for (i = 0; i < g_size * g_size; i++) {
			var $row = $("<div class=sketch></div>");
			$(".container").append($row);
		}

		//@desc obtains the correct sizing for the squares being added in. 
		var calc = 650 / g_size;

		$(".sketch").css({
			"width": calc + "px"
		});
		$(".sketch").css({
			'height': calc + "px"
		});
		
		
	};
	
	createGrid(16);

	
	
	var rainbowColorPicker = function () {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		rgb = "rgb(" + r + "," + g + "," + b + ")"
		return rgb;
	}
	
	var greyscaleColor = function() {
  var randomNumber = Math.floor(Math.random()*9+1)
  greys = "rgba(0,0,0,0." + randomNumber + ")";
}
	
	var clear = function() {
  $(".sketch").css("background-color", "rgb(193, 190, 177)" );
}




		
/*=======buttons====== */
			$(".rainbow").on('click', function () {
				

				$(".rainbow").addClass("bttn-on");

				$(".remove").removeClass("bttn-on");
				$(".reset").removeClass("bttn-on");
				$(".greyscale").removeClass("bttn-on");
				

			});

			// @desc this removes any colored blocks
			$(".remove").on('click', function () {
				clear();
			});

			$(".reset").on('click', function () {
				

				$(".reset").addClass("bttn-on");
				
				$(".greyscale").removeClass("bttn-on");
				$(".remove").removeClass("bttn-on");
				$(".rainbow").removeClass("bttn-on");

			});


			$(".greyscale").on('click', function () {
				
				$(".greyscale").addClass("bttn-on");
				
				$(".rainbow").removeClass("bttn-on");
				$(".remove").removeClass("bttn-on");
				$(".reset").removeClass("bttn-on");

			});
	
	
		



var colorManage = function () {
	$(".sketch").mouseenter(function () {
		if ($(".reset").hasClass("bttn-on")) {
			$paintColor = defaultColor;

		} else if ($(".rainbow").hasClass("bttn-on")) {
			rainbowColorPicker();
			$paintColor = rgb;

		} else if ($(".greyscale").hasClass("bttn-on")) {
			greyscaleColor();
			$paintColor = greys;
		}

		$(this).css("background-color", $paintColor);
	});
}
colorManage();
});









