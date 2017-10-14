var log = console.log.bind(console);

var imageFromPath = function(path) {
	var img = new Image();
	img.src = path;
	return img;
};

var rectIntersects = function(a, b) {
	// 两个矩形不相交的四种情况
	if ((b.x + b.w < a.x) || (a.x + a.w < b.x) || (a.y + a.h < b.y) || (b.y + b.h < a.y)) {
		return false;  // 无碰撞
	} else {
		return true;
	}
};