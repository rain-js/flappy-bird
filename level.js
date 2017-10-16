var levels = [
	[
		[10, 50],
	],
	[
		[10, 60],
		[100, 80],
	],
	[
		[20, 80],
		[100, 100],
		[200, 70, 2],
	],
];

var loadLevel = function(n, game) {
	var n = n - 1;
	var level = levels[n];
	var blocks = [];

	if (n > levels.length) {
		return;
	}

	for (var i = 0; i < level.length; i++) {
		var block = Block(game, level[i]);
		blocks.push(block);
	}

	return blocks;
}
