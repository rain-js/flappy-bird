var Block = function(game, position) {
	// position根据关卡数据[0, 0]初始化砖块的坐标
	var p = position;
	var image = game.images['block'];
	
	var o = {
		image: image,
		x: p[0],
		y: p[1],
		w: image.width,
		h: image.height,
		alive: true,
		lifes: p[2] || 1,

		kill: function() {
			this.lifes--;
			if (this.lifes < 1) {
				this.alive = false;				
			}
		},
	}

	return o;
}