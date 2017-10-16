var log = console.log.bind(console);

var imageFromPath = function(path) {
	var img = new Image();
	img.src = path;
	return img;
};

var imageByName = function(name) {
	var img = new Image();
	img.src = './img/' + name + '.png';
	return img;
};

// 检测两个矩形是否碰撞(碰撞检测)
var rectIntersects = function(a, b) {
	// 两个矩形不相交的四种情况
	if ((b.x + b.w < a.x) || (a.x + a.w < b.x) || (a.y + a.h < b.y) || (b.y + b.h < a.y)) {
		return false;  // 无碰撞
	} else {
		log('collide');
		return true;
	}
};

// 判断点是否在矩形中
var pointInRect = function(pX, pY, rectX, rectY, rectW, rectH) {
	return Boolean((pX > rectX && pX < rectX + rectW) && (pY > rectY && pY < rectY + rectH));
};

var enableDebugMode = function(enable) {
	if (!enable) {
		return;
	}

	window.addEventListener('keydown', function(event) {
		var k = event.key;

		if ('123456789'.includes(k)) {
			//log(loadLevel(k))
			blocks = loadLevel(k, game);
		}
	});

	document.querySelector('#id-input-fps').addEventListener('input', function(event) {
		// log(event.target)
		log('fps = ' + window.fps);
		window.fps = event.target.value;
	});
};