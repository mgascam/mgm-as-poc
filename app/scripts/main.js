/* jshint devel:true */
var GameViewport = function (domElement) {
	this.$domElement = domElement;
	this.windowWidth = window.innerWidth;
	this.windowHeight = window.innerHeight;
	this.aspectRatio = 1.5;
}

GameViewport.prototype.updateSize = function() {
	this.$domElement.height(this.windowHeight);
	this.$domElement.width(this.windowHeight * this.aspectRatio);
/*
	var scaleX = this.windowWidth / this.defaultWidth;
	var scaleY = this.windowHeight / this.defaultHeight;
	this.$domElement.css({
		 '-webkit-transform' : 'scale(' +scaleX + ',' + scaleY + ')',
		 '-webkit-transform-origin': '0 0'
	});
*/
};

var gvp = new GameViewport($('#viewport'));
gvp.updateSize();

var GameViewPortInfo = function (domElement) {
	this.windowWidth = window.innerWidth;
	this.windowHeight = window.innerHeight;
	this.width = domElement.width();
	this.height = domElement.height();
}
GameViewPortInfo.prototype.update = function() {
	$('#wWidth').text(this.windowWidth);
	$('#wHeigth').text(this.windowHeight);
	$('#vWidth').text(this.width);
	$('#vHeigth').text(this.height);
};

var iv = new GameViewPortInfo($('#viewport'));
iv.update();