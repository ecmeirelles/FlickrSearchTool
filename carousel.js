var previousImage = '';
var images = document.getElementsByTagName('img'); 

// Center first image loaded (images[0] = left-arrow.png)
centerImage(images[1]);

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
	document.getElementById('carousel-images').style.transition = 'left 1s ease-in-out';
}

function changeOpacity(image) {	
	if(previousImage != '') {
		previousImage.classList.remove('active');
	}
	
	image.className = 'active';
	
	previousImage = image;
}

function changeMainImage(arrow_position) {
	var i = currentImageIndex = 0;
	
	while(i < images.length) {
		if(images[i].className == 'active') {
			currentImageIndex = i;
			break;
		}
		
		else {
			i++;
		}
	}
	
	if(arrow_position == 'left') {
		// If the previous image is not the left arrow (images[0]), the new main image is the previous of the current one
		if(currentImageIndex-1 != 0) {
			centerImage(images[currentImageIndex-1]);
		}
		// If previous image is the left arrow, the new main image is the last one
		else {
			centerImage(images[images.length-2]);
		}
	}
	
	else {
		// If the next image is not the right arrow (images[lenght-1]), the new main image is the next of the current one
		if(currentImageIndex+1 != images.length-1) {
			centerImage(images[currentImageIndex+1]);
		}
		// If the next image is the right arrow, the new main image is the first one
		else {
			centerImage(images[1]);
		}
	}
}