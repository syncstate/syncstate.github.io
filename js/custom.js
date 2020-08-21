window.onload = () => {
	document.querySelector(".csb").style.display = "block";
	console.log(window.location.toString().includes("example"));
	if (window.location.toString().includes("example")) {
		document.querySelector(".onPageNav").style.display = "none";
	}
};
