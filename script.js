function welcomeAlert() {
	userId = document.getElementById("login").value
	alert("Welcome, " + userId + "!");
	window.location.href = "../index.html"
}

function searchFail() {
	alert("Sorry, no results");
}

function contactSubmit() {
	alert("Thanks for your message, we'll be in touch");
	window.location.href = "https://replit.com/@CatrinJ/Group3Project#index.html"
}