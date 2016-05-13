var currentImage = '';

function centerImage(image) {
	var innerLeft = image.offsetLeft;
	
	var halfOuterWidth = document.getElementById('carousel').offsetWidth / 2;
	var halfImageWidth = image.offsetWidth / 2;
	
	var outerLeft = halfOuterWidth - halfImageWidth; 
	
	document.getElementById('carousel-images').style.left = (outerLeft - innerLeft) + 'px';
	
	animation();
	changeOpacity(image);
}

function animation() {
	document.getElementById('carousel-images').style.WebkitTransition = 'left 1s linear';
	document.getElementById('carousel-images').style.transition = 'left 1s linear';
}

function changeOpacity(image) {
	if(!currentImage == '') {
		currentImage.childNodes[0].style.opacity = '0.2';
	}
	
	image.childNodes[0].style.opacity = '1';
	
	currentImage = image;
}