(function(){ 
	container = $('#canvasContainer')
	an.loadCanvas(container,0,0);
	an.loadImage("map.png", 320, 200);
	an.addComment('this is a test\ncomment', 'text', 100, 100);
	an.addComment('this is a sample\nline comment', 'line', 300, 100, 150, 150, 150, 175);
})();