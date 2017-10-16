var Ball = function(game) {
	var image = game.images['ball'];

	var o = {
		image: image,
		x: 100,
		y: 200,
		w: image.width,
		h: image.height,
		speedX: 5,
		speedY: 5,
		fired: false,

		pause: function() {
			log('stop the ball');
			this.fired = false;
		},
		fire: function() {
			log('fire the ball');
			this.fired = true;
		},
		move: function() {
			// log(this.image.width)
			if (this.fired) {
				if (this.x < 0 || (this.x + this.image.width) > 300) {
					this.speedX = -this.speedX;
				}
				if (this.y < 0 || (this.y + this.image.height) > 500) {
					this.speedY = -this.speedY;
				}
				this.x += this.speedX;
				this.y += this.speedY;
			}
		},
		collide: function(block) {
			return rectIntersects(this, block);
		},
		bounce: function() {
			this.speedY = -this.speedY;
		}
	}

	return o;
};