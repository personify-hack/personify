const PLAYLISTS = "https://api.spotify.com/v1/me/playlists";
const ARTISTS = "https://api.spotify.com/v1/search?type=artist";
const RECOMMENDATIONS = "https://api.spotify.com/v1/recommendations";
artistIds = [];

function getFormValues() {
	const mood = document.getElementById("mood");
	const genres = document.getElementById("genres");
	const artist = document.getElementById("artistsInput");

	const formData = {
		mood: mood.value,
		genres: genres.value,
		artist: artist.value,
	};
	return formData;
}

async function callApis() {
	const formData = getFormValues();
	const artist_ids = await fetchArtists();
	const recommended = fetchRecommendations(artist_ids, formData);
}

function fetchArtists() {
	return new Promise((resolve) => {
		artistIds = [];
		const artistsInput = document.getElementById("artistsInput");
		const artists = artistsInput.value.split(",");

		for (const artist of artists) {
			const encodedArtistName = encodeURIComponent(artist);

			callApi(
				"GET",
				ARTISTS + `&q=${encodedArtistName}`,
				null,
				handleArtistResponse
			);
		}
		resolve(artistIds);
	});
}

function handleArtistResponse() {
	if (this.status == 200) {
		var data = JSON.parse(this.responseText);
		artistIds.push(data.artists.items[0]?.id);
	} else if (this.status == 401) {
		refreshAccessToken();
	} else {
		console.log(this.responseText);
		alert(this.responseText);
	}
	console.log(artistIds);
}

function fetchRecommendations(artist_ids, formData) {
	console.log(artist_ids);
	const seed_genres = formData.genres;
	const target_valence = formData.mood / 100.0;
	limit = 50;

	callApi(
		"GET",
		RECOMMENDATIONS +
			`?seed_genres=${seed_genres}&seed_artists=${artist_ids}&target_valence=${target_valence}&limit=${limit}`,
		null,
		handleRecommendationsResponse
	);
}

function handleRecommendationsResponse() {
	if (this.status == 200) {
		var data = JSON.parse(this.responseText);
		console.log(data);
		// Do stuff
	} else if (this.status == 401) {
		refreshAccessToken();
	} else {
		console.log(this.responseText);
		alert(this.responseText);
	}
}

function refreshPlaylists() {
	callApi("GET", PLAYLISTS, null, handlePlaylistsResponse);
}

function handlePlaylistsResponse() {
	if (this.status == 200) {
		var data = JSON.parse(this.responseText);
		console.log(data);
		// Do stuff
	} else if (this.status == 401) {
		refreshAccessToken();
	} else {
		console.log(this.responseText);
		alert(this.responseText);
	}
}
