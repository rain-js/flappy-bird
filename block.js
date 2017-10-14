var Block = function() {
	var image = imageFromPath('./img/block.png');
	
	var o = {
		image: image,
		x: 50,
		y: 50,
		w: 40,
		h: 19,
		alive: true,

		kill: function() {
			this.alive = false;
		},
	}

	return o;
}