var blocks = [];
var enableDebugMode = function(enable) {
	if (!enable) {
		return;
	}

	window.addEventListener('keydown', function(event) {
		var k = event.key;

		if ('123456789'.includes(k)) {
			log(loadLevel(k))
			blocks = loadLevel(k);
		}
	});

	document.querySelector('#id-input-fps').addEventListener('input', function(event) {
		// log(event.target)
		log('fps = ' + window.fps);
		window.fps = event.target.value;
	});
};

var __main = function() {
	enableDebugMode(true);
	
	var game = BirdGame();
	var bird = Bird();
	var ball = Ball();
	var score = 0;
	
	blocks = loadLevel(1);

	game.registerActions('a', function() {
		bird.moveLeft();
	});

	game.registerActions('d', function() {
		bird.moveRight();
	});

	game.registerActions('f', function() {
		ball.fire();
	});

	game.registerActions('p', function() {
		ball.pause();
	});

	game.update = function() {
		// 挡板与球
		if (bird.collide(ball)) {
			ball.bounce();
		}
		ball.move();

		// 球与砖块
		for (var i = 0; i < blocks.length; i++) {
			// 砖块存在时再判断相撞
			if (blocks[i].alive && ball.collide(blocks[i])) {
				blocks[i].kill();
				ball.bounce();
				score += 100;
			}	
		}
		
	}

	game.draw = function() {
		game.drawImage(ball);
		game.drawImage(bird);

		for (var i = 0; i <  blocks.length; i++) {
			if (blocks[i].alive) {
				game.drawImage(blocks[i]);		
			}	
		}

		game.context.font = '18px serif';
	 	game.context.fillText('Score：' + score, 10, 485);
		
	};

	var enableDrag = false;
	// mouse event
	game.canvas.addEventListener('mousedown', function(event) {
		log(event.offsetX, event.offsetY)

		// 检查是否点中了ball
		if (pointInRect(event.offsetX, event.offsetY, ball.x, ball.y, ball.w, ball.h)) {
			// 设置拖拽状态
			enableDrag = true;
		}
	});

 	game.canvas.addEventListener('mousemove', function(event) {
 		if (enableDrag) {
 			log('drag the ball');

 			ball.x = event.offsetX;
 			ball.y = event.offsetY;
 		}
 	});

 	game.canvas.addEventListener('mouseup', function(event) {
 		enableDrag = false;
 	})

}