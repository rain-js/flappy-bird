var blocks = [];
var enableDebugMode = function(enable) {
	if (!enable) {
		return;
	}

	window.addEventListener('keydown', function(event) {
		var k = event.key;

		if ('123456789'.includes(k)) {
			log(loadLevel(k))
			blocks = loadLevel(k);
		}
	});

	document.querySelector('#id-input-fps').addEventListener('input', function(event) {
		// log(event.target)
		log('fps = ' + window.fps);
		window.fps = event.target.value;
	});
};

var __main = function() {
	enableDebugMode(true);
	
	var game = BirdGame();
	var scene = Scene(game);

	game.update = function() {
	 	scene.update();		
	}
	game.draw = function() {
		scene.draw();	
	}
	
}