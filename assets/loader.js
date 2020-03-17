console.log("PageLoading...");
document.addEventListener('readystatechange', event => {
	if (event.target.readyState === "complete") {
		console.log("PageLoaded");
		document.getElementById("page").classList.remove("hidden");
		document.getElementById("page").classList.add("visible");
		document.getElementById("loading_page").classList.add("hidden");
		document.getElementById("loading_page").classList.remove("visible");
	}
});


