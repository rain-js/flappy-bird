var Ball = function() {
	var image = imageFromPath('./img/ball.png');
	var o = {
		image: image,
		x: 100,
		y: 100,
		speedX: 5,
		speedY: 5,
		fired: false,

		pause: function() {
			log('let the ball pause');
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
			if (block.y + block.image.height > this.y) {
				if (block.x > this.x && block.x < this.x + this.image.width) {
					log('ball and block collide')
					return true;
				}
			}
			return false;
		},
		bounce: function() {
			this.speedY = -this.speedY;
		}
		}

	return o;
};