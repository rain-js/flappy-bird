var BirdGame = function (fps) {
	var canvas = document.querySelector('#id-canvas');
	var context = canvas.getContext('2d');

	var g = {
		keydowns: {},		// 存放每个key对应是否被按下的状态
		actions: {},		// 存放每个key对应的注册函数（回调）
		
		registerActions: function(key, callback) {
			this.actions[key] = callback;
		},
		drawImage: function(o) {
			context.drawImage(o.image, o.x, o.y);
		},
	}
	
	// events
	window.addEventListener('keydown', function(event) {
		g.keydowns[event.key] = true;
	});

	window.addEventListener('keyup', function(envet) {
		g.keydowns[event.key] = false;
	});

	// timer
	setInterval(function() {
		var keys = Object.keys(g.actions);
		for (var i = keys.length - 1; i >= 0; i--) {
			var key = keys[i];
			if (g.keydowns[key]) {
				 // 如果按键被按下, 调用注册的 action
				g.actions[key]();				
			}
		}
		// update
		g.update();

		// clear
		context.clearRect(0, 0, canvas.width, canvas.height);
		
		// draw
		g.draw()
		
		
	}, 1000/fps);

	return g;
}
