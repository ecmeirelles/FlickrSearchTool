var request = '';
var allImages = '';
var uri = '';

function findImages() {
	var carousel_images = document.getElementById("carousel-images");
	carousel.style.display = 'none';
	
	while (carousel_images.firstChild) {
		carousel_images.removeChild(carousel_images.firstChild);
	}
	
	var tags = document.getElementsByTagName('input');
	
	uri = "https://www.flickr.com/services/rest/?";
	uri += "method=flickr.photos.search";
	uri += "&api_key=f2d3e882afae6220e175c126c6b971ed";
	
	var tagsString = '';
	var emptyTag = 0;
	for(var i = 0; i < tags.length; i++) {
		if(i+1 < tags.length) {
			if(tags[i+1].value != '') {
				tagsString += tags[i].value + ',';
			}

			else {
				emptyTag++;
			}
		}
		
		else {
			if(tags[i].value != '') {
				tagsString += tags[i].value;
			}

			else {
				emptyTag++;
			}
		}
	}
	
	uri += "&tags=" + tagsString;
	uri += "&tag_mode=all";
	uri += "&format=json";
	
	if(emptyTag == 0) {
		request = encodeURI(uri);
		sendRequest(request);
		
		document.getElementById('find-images').innerHTML = '<img src=loading.gif>';
		document.getElementById('photos').innerHTML = '<img src=loading.gif>';
	}
	
	else {
		document.getElementById('photos').innerHTML = 'Empty Tag Detected';
	}
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
			
			fitImageCarousel(flickrImage);
			carousel.appendChild(flickrImage);
			
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