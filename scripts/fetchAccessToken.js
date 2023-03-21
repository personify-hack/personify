async function getAccessToken() {
	const CLIENT_ID = "13aca85cd9ab47c4bb0dde8481173e87";
	const CLIENT_SECRET = "b90f3294ac6f4f5e8b7123bdc02d622d";

	const credentials = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

	const response = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			Authorization: `Basic ${credentials}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: "grant_type=client_credentials&scope=playlist-modify-public playlist-modify-private",
	});

	const data = await response.json();
	console.log("Data");
	console.log(data);
	return data.access_token;
}

// https://developer.spotify.com/console/post-playlists/
