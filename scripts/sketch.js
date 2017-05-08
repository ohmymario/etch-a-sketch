$(document).ready(function () {

	/*@desc amount of squares horizontally + vertically 
	then uses a loop to add them into the container*/

	var $paintColor = "";

	var defaultColor = "#303832"
	var greys = true;
	var rgb = null;
	var g_density = 16;

	var createGrid = function (g_density) {

		for (i = 0; i < g_density * g_density; i++) {
			var $row = $("<div class=sketch></div>");
			$(".container").append($row);
		}

		//@desc obtains the correct sizing for the squares being added in. 
		var calc = 650 / g_density;

		$(".sketch").css({
			"width": calc + "px"
		});
		$(".sketch").css({
			'height': calc + "px"
		});
	};
	
	createGrid(g_density);
	
	// @desc to prevent browser lag this function limits users to 1-64 grid size upon pressing button. This is only called by gridsize function
	var checkNum = function (g_density) {
		if (isNaN(g_density)) {
			alert("Please enter a number!");
			return 16;
		} else if (g_density < 1 || g_density > 64) {
			alert("Please enter a number between 1-64");
			return 16;
		} else {
			return g_density;
		}
	};


	var rainbowColorPicker = function () {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		rgb = "rgb(" + r + "," + g + "," + b + ")"
		return rgb;
	}

	var greyscaleColor = function () {
		var randomNumber = Math.floor(Math.random() * 9 + 1)
		greys = "rgba(0,0,0,0." + randomNumber + ")";
	}

	var clear = function () {
		$(".sketch").css("background-color", "rgb(234, 234, 234)");
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

	
	//@desc sets grid, color to default
	$(".reset").on('click', function () {
		
		$(".reset").addClass("bttn-on");
		$(".sketch").remove();
		createGrid(16);
		colorManage();
		
		$(".greyscale").removeClass("bttn-on");
		$(".remove").removeClass("bttn-on");
		$(".rainbow").removeClass("bttn-on");

	});

	// @desc listens for greyscale button to be pressed
	$(".greyscale").on('click', function () {

		$(".greyscale").addClass("bttn-on");

		$(".rainbow").removeClass("bttn-on");
		$(".remove").removeClass("bttn-on");
		$(".reset").removeClass("bttn-on");

	});

	//@desc takes user input, check if within 1-64, then applies the correct grid density
	$(".griddensity").on('click', function () {
		g_density = prompt("Type your desired grid size from 1-64 (default: 16)");
		$(".sketch").remove();
		createGrid(checkNum(g_density));
		colorManage();
	});

	//@desc decides what color to apply depeding on what button has the class "bttn-on"
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

