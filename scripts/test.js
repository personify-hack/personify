var redirect_uri = "http://127.0.0.1:5500/pages/test.html";

var CLIENT_ID = "13aca85cd9ab47c4bb0dde8481173e87";
var CLIENT_SECRET = "b90f3294ac6f4f5e8b7123bdc02d622d"; // In a real app you should not expose your client_secret to the user

var access_token = null;
var refresh_token = null;
var currentPlaylist = "";
var radioButtons = [];

const AUTHORIZE = "https://accounts.spotify.com/authorize";
const TOKEN = "https://accounts.spotify.com/api/token";

function onPageLoad() {
	if (window.location.search.length > 0) {
		handleRedirect();
	} else {
		access_token = localStorage.getItem("access_token");
	}
}

function handleRedirect() {
	let code = getCode();
	fetchAccessToken(code);
	window.history.pushState("", "", redirect_uri); // remove param from url
}

function getCode() {
	let code = null;
	const queryString = window.location.search;
	if (queryString.length > 0) {
		const urlParams = new URLSearchParams(queryString);
		code = urlParams.get("code");
	}
	return code;
}

function requestAuthorization() {
	let url = AUTHORIZE;
	url += "?client_id=" + CLIENT_ID;
	url += "&response_type=code";
	url += "&redirect_uri=" + encodeURI(redirect_uri);
	url += "&show_dialog=true";
	url += "&scope=playlist-modify-public playlist-modify-private";
	window.location.href = url; // Show Spotify's authorization screen
}

function fetchAccessToken(code) {
	let body = "grant_type=authorization_code";
	body += "&code=" + code;
	body += "&redirect_uri=" + encodeURI(redirect_uri);
	body += "&client_id=" + CLIENT_ID;
	body += "&client_secret=" + CLIENT_SECRET;
	callAuthorizationApi(body);
}

function refreshAccessToken() {
	refresh_token = localStorage.getItem("refresh_token");
	let body = "grant_type=refresh_token";
	body += "&refresh_token=" + refresh_token;
	body += "&client_id=" + CLIENT_ID;
	callAuthorizationApi(body);
}

function callAuthorizationApi(body) {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", TOKEN, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.setRequestHeader(
		"Authorization",
		"Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET)
	);
	xhr.send(body);
	xhr.onload = handleAuthorizationResponse;
}

function handleAuthorizationResponse() {
	if (this.status == 200) {
		var data = JSON.parse(this.responseText);
		console.log(data);
		var data = JSON.parse(this.responseText);
		if (data.access_token != undefined) {
			access_token = data.access_token;
			localStorage.setItem("access_token", access_token);
		}
		if (data.refresh_token != undefined) {
			refresh_token = data.refresh_token;
			localStorage.setItem("refresh_token", refresh_token);
		}
		onPageLoad();
	} else {
		console.log(this.responseText);
		alert(this.responseText);
	}
}

function callApi(method, url, body, callback) {
	let xhr = new XMLHttpRequest();
	xhr.open(method, url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Authorization", "Bearer " + access_token);
	xhr.send(body);
	xhr.onload = callback;
}
