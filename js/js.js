


				/*SLIDESHOW*/
				
var images = ["m1.jpg","m2.jpg","m3.jpg"];
var imageNumber = 0;
var imageLength = images.length -1;
//alert(images[imageNumber]);   // exibe o conteúdo dum array somente
function changeImage(x) {
	imageNumber += x;
	if (imageNumber > imageLength) {
		imageNumber = 0;
	}
	document.getElementById("slideshow").src = images[imageNumber];
	return false;
}
function autoRun () {				
	setInterval("changeImage(1)",4000);
}
window.addEventListener("load",autoRun);