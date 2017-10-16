var blocks = [];
var images = [];
var game = null;

var __main = function() {

	// 载入图片资源
	var names = [
		'ball',
		'block',
		'flappyBird',
	];

	for (var i = 0; i < names.length; i++ ) {
		images[names[i]] = imageByName(names[i])
	}

	images[names[names.length - 1]].onload = function() {
		enableDebugMode(true);
	
		game = BirdGame(images);
		var scene = Scene(game);

		game.update = function() {
		 	scene.update();		
		}
		game.draw = function() {
			scene.draw();	
		}

		game.replaceScene = function(s) {
			scene = s;
		}
	}
}