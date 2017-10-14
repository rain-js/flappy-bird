var log = console.log.bind(console);

var imageFromPath = function(path) {
	var img = new Image();
	img.src = path;

	return img;
};

var rectIntersects = function(a, b) {
	if (b.y + b.image.height > a.y) {
		if (b.x > a.x && b.x < a.x + a.image.width) {
			log('ball and b collide')
			return true;
		}
	}
	return false;
};