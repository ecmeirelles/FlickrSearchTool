var previousImage = '';
var images = document.getElementsByTagName('a'); 

centerImage(images[0]);

function centerImage(image) {
	var innerLeft = image.offsetLeft;
	
	var halfOuterWidth = document.getElementById('carousel').offsetWidth / 2;
	var halfImageWidth = image.offsetWidth / 2;
	
	var outerLeft = halfOuterWidth - halfImageWidth; 
	
	document.getElementById('carousel-images').style.left = (outerLeft - innerLeft) + 'px';
	
	if(previousImage != '') {
		animation();
	}
	
	changeOpacity(image);
}

function animation() {
	document.getElementById('carousel-images').style.WebkitTransition = 'left 1s ease-in-out';
	document.getElementById('carousel-images').style.transition = 'left s ease-in-out';
}

function changeOpacity(image) {	
	if(previousImage != '') {
		previousImage.childNodes[0].classList.remove('active');
	}
	
	image.childNodes[0].className = 'active';
	
	previousImage = image;
}