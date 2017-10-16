var Bird = function(game) {
	var image = game.images['flappyBird'];

	var o = {
		image: image,
		x: 100,
		y: 420,
		w: image.width,
		h: image.height,
		speed: 10,
		
		moveLeft: function() {
			this.x -= this.speed;
			if (this.x < 0) {
				this.x = 0;
			}
		},
		moveRight: function() {
			this.x += this.speed;
			if (this.x + this.image.width > 300) {
				this.x = 300 - this.image.width;
			}
		},
		collide: function(ball) {
			return rectIntersects(this, ball);
		},
	}

	return o;
}