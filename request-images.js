var request = '';
var allImages = '';

function findImages() {
	var carousel_images = document.getElementById("carousel-images");
	carousel.style.display = 'none';
	
	while (carousel_images.firstChild) {
		carousel_images.removeChild(carousel_images.firstChild);
	}
	
	var tags = document.getElementsByTagName('input');
	
	request = "https://www.flickr.com/services/rest/?";
	request += "method=flickr.photos.search";
	request += "&api_key=f2d3e882afae6220e175c126c6b971ed";
	
	var tagsString = '';
	for(var i = 0; i < tags.length; i++) {
		if(i+1 < tags.length) {
			tagsString += tags[i].value + ',';
		}
		
		else {
			tagsString += tags[i].value;
		}
	}
	
	request += "&tags=" + tagsString;
	request += "&tag_mode=all";
	request += "&format=json";
	
	sendRequest(request);
	
	document.getElementById('find-images').innerHTML = '<img src=loading.gif>';
	document.getElementById('photos').innerHTML = '<img src=loading.gif>';
}

function sendRequest(url) {
	var head = document.getElementsByTagName('head')[0];
	var newScript = document.createElement('script');
	newScript.setAttribute('src', url);

	head.appendChild(newScript);
}

function jsonFlickrApi(images) {
	var carousel = document.getElementById('carousel-images');
	var url = '';
	var numberOfImages = images.photos.photo.length;
	
	if(numberOfImages == 0) {
		document.getElementById('find-images').innerHTML = 'Find Images';
		document.getElementById('photos').innerHTML = 'No Results Found';
	}
	
	else {
		for (var i = 0; i < numberOfImages; i++ ) {
			url = "http://farm" + images.photos.photo[i].farm ;
			url += ".static.flickr.com/" ;
			url += images.photos.photo[i].server + "/";
			url += images.photos.photo[i].id + "_";
			url += images.photos.photo[i].secret;
			url += "_t.jpg"
			
			var flickrImage = document.createElement('img');
			flickrImage.src = url;
			flickrImage.onclick = centerImage;
			
			carousel.appendChild(flickrImage);
			fitImageCarousel(flickrImage);
			
			flickrImage.onload = function() {
				numberOfImages--;
				
				if(numberOfImages <= 0) {
					document.getElementById('find-images').innerHTML = 'Find Images';
					allImages = document.getElementsByTagName('img');
					clickAction(allImages[1]);
					
					carousel.style.display = 'block';
				}
			}
		}
	}
}