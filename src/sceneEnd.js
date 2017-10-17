var SceneEnd = function(game) {
	var s = {
		game: game,
	}

	s.update = function() {
		// code..
	};
	
	s.draw = function() {
		game.context.font = '18px serif';
	 	game.context.fillText('Game Over', 100, 230);
	};

	return s;
}