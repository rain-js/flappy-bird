var Scene = function(game) {
	var s = {
		game: game,
	}

	var bird = Bird(game);
	var ball = Ball(game);
	var score = 0;

	blocks = loadLevel(1, game);

	s.game.registerActions('a', function() {
		bird.moveLeft();
	});

	s.game.registerActions('d', function() {
		bird.moveRight();
	});

	s.game.registerActions('f', function() {
		ball.fire();
	});

	s.game.registerActions('p', function() {
		ball.pause();
	});

	var __startBounce = false;

	s.update = function() {
		// 当球开始反弹时，过多1s才检测碰撞
		if (!__startBounce && bird.collide(ball)) {
			__startBounce = true;
			if (__startBounce) {
				setTimeout(function() {
					log('startBounce')
					__startBounce = false;
				}, 1000);
			}
			ball.bounce();
		}
		ball.move();

		if (ball.y > bird.y + bird.h) {
			log('game over....')
			var end = SceneEnd(game);
			s.game.replaceScene(end);
			return;
		}

		// 球与砖块
		for (var i = 0; i < blocks.length; i++) {
			// 砖块存在时再判断相撞
			if (blocks[i].alive && ball.collide(blocks[i])) {
				blocks[i].kill();
				ball.bounce();
				score += 100;
			}	
		}
	};
	
	s.draw = function() {
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

	return s;
}