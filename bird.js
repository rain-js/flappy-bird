var Bird = function() {
	var image = imageFromPath('./img/flappyBird.png');
	var o = {
		image: image,
		x: 100,
		y: 420,
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
			if (ball.y + ball.image.height > this.y) {
				if (ball.x > this.x && ball.x < this.x + this.image.width) {
					log('bird and ball collide')
					return true;
				}
			}
			return false;
		},
		}

	return o;
}