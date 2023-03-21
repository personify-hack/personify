async function addTracksToPlaylist(playlistId, trackUris) {
	const access_token = await getAccessToken();
	console.log(access_token);
	const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
	return fetch(url, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${access_token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ uris: trackUris }),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(`Tracks added to playlist with ID ${playlistId}`);
			return data;
		})
		.catch((error) => {
			console.error("Error adding tracks to playlist:", error);
		});
}
