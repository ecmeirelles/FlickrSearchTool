function centerImage(image) {
	var innerLeft = image.offsetLeft;
	
	var halfOuterWidth = document.getElementById('carousel').offsetWidth / 2;
	var halfImageWidth = image.offsetWidth / 2;
	
	var outerLeft = halfOuterWidth - halfImageWidth; 
	
	document.getElementById('carousel-images').style.left = (outerLeft - innerLeft) + 'px';
}