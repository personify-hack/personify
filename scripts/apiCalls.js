const user_id = "31xlojdxrz4skapenzfcqyqg5ama";
const CREATEPLAYLISTS = `https://api.spotify.com/v1/users/${user_id}/playlists`;
const ARTISTS = "https://api.spotify.com/v1/search?type=artist";
const RECOMMENDATIONS = "https://api.spotify.com/v1/recommendations";
const TRACKS = "https://api.spotify.com/v1/playlists/";
const GETPLAYLIST = " 	https://api.spotify.com/v1/playlists/";

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

function callApi(method, url, body) {
	return new Promise(function (resolve, reject) {
		let xhr = new XMLHttpRequest();
		xhr.open(method, url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader("Authorization", "Bearer " + access_token);
		xhr.onload = function () {
			if (this.status >= 200 && this.status < 300) {
				resolve(JSON.parse(xhr.responseText));
			} else if (this.status == 401) {
				requestAuthorization();
			} else {
				reject({
					status: this.status,
					statusText: xhr.statusText,
				});
			}
		};
		xhr.onerror = function () {
			reject({
				status: this.status,
				statusText: xhr.statusText,
			});
		};
		xhr.send(body);
	});
}

async function runApis() {
	const formData = getFormValues();
	const artist_ids = await fetchArtists();
	const recommended = await fetchRecommendations(artist_ids, formData);
	const playlist = await createPlaylist();
	const songs = await addTracksToPlaylist(playlist.id, recommended);
}

async function fetchArtists() {
	artistIds = [];
	const artistsInput = document.getElementById("artistsInput");
	const artists = artistsInput.value.split(",");

	for (const artist of artists) {
		const encodedArtistName = encodeURIComponent(artist);

		let data = await callApi("GET", ARTISTS + `&q=${encodedArtistName}`, null);
		artistIds.push(data.artists.items[0]?.id);
	}
	console.log(artistIds);
	return artistIds;
}

async function fetchRecommendations(artist_ids, formData) {
	const seed_genres = formData.genres;
	const target_valence = formData.mood / 100.0;
	limit = 50;
	recommended = [];
	let data = await callApi(
		"GET",
		RECOMMENDATIONS +
			`?seed_genres=${seed_genres}&seed_artists=${artist_ids}&target_valence=${target_valence}&limit=${limit}`,
		null
	);
	data.tracks.forEach((track) => {
		recommended.push(track.uri);
	});
	console.log(recommended);
	return recommended;
}

async function createPlaylist() {
	body = JSON.stringify({
		name: "Your Mood",
		description:
			"A personalized playlist curated just for you created by Personify!",
	});
	let data = await callApi("POST", CREATEPLAYLISTS, body);
	console.log(data);
	return data;
}

async function addTracksToPlaylist(playlistId, tracks) {
	let tracksUrl = TRACKS + `${playlistId}/tracks`;
	body = JSON.stringify({
		uris: tracks,
	});
	let data = await callApi("POST", tracksUrl, body);
	console.log(data);

	embedPlaylist(playlistId);

	return data;
}

function embedPlaylist(playlistId) {
	playlistEmbed = `
    <iframe src="https://open.spotify.com/embed/playlist/${playlistId}" width="100%" height="87%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  `;

	const playlistContainer = document.getElementById("playlist-container");
	playlistContainer.innerHTML = playlistEmbed;
}
