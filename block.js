var Block = function(position) {
	// position根据关卡数据[0, 0]初始化砖块的坐标
	var p = position;
	var image = imageFromPath('./img/block.png');
	
	var o = {
		image: image,
		x: p[0],
		y: p[1],
		w: 40,
		h: 19,
		alive: true,

		kill: function() {
			this.alive = false;
		},
	}

	return o;
}