window.onload = () => {
	console.log(window.location.toString().includes("example"));
	if (window.location.toString().includes("example")) {
		document.querySelector(".onPageNav").style.display = "none";
	}
	console.log("why?" + window.location.toString().includes("why"));
	if (window.location.toString().includes("why")) {
		document.querySelector(".postHeader").style.display = "none";
	}
};
