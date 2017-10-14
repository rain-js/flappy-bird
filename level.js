var levels = [
	[
		[0, 0],
	],
	[
		[0, 0],
		[100, 0],
	],
	[
		[0, 0],
		[100, 0],
		[200, 0],
	],
];

var loadLevel = function(n) {
	var n = n - 1;
	var level = levels[n];
	var blocks = [];

	if (n > levels.length) {
		return;
	}

	for (var i = 0; i < level.length; i++) {
		var block = Block(level[i]);
		blocks.push(block);
	}

	return blocks;
}
