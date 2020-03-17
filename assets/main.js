var header = document.getElementById("header");
var header = document.getElementById("header");
window.onscroll = function () { myFunction() };
function getPxToDiv(div, px) {
	let dHeight = document.getElementById(div).clientHeight;
	return dHeight + px;
}
function myFunction() {
	if (window.pageYOffset > getPxToDiv("TmmIntro", 19.5)) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}
// setInterval(() => {
// 	if (window.history.pushState) {
// 		window.history.pushState('', '/', window.location.pathname)
// 	} else {
// 		window.location.hash = '';
// 	}
// }, 500);
