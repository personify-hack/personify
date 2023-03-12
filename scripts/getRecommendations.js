async function getRecommendations() {
  const formData = getHomeValues();
  const artist_ids = await fetchArtistIds();
  const recommended = await fetchRecommendedApi(artist_ids, formData);
  console.log(recommended);

  const playlist = await createPlaylist();

  console.log(playlist);

  trackURIS = [];
  recommended.tracks.forEach((track) => {
    trackURIS.push(track.uri);
  });

  const songs = await addTracksToPlaylist(playlist.id, trackURIS);

  await displayPlaylist(playlist.id);
}
async function displayPlaylist(playlistId) {
  try {
    const playlistEmbed = await getPlaylistEmbed(playlistId);
    const playlistContainer = document.getElementById("playlist-container");
    playlistContainer.innerHTML = playlistEmbed;
  } catch (error) {
    console.error(error);
  }
}

async function getPlaylistEmbed(playlistId) {
  accessToken = getAccessToken();
  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const data = await response.json();

  return `
    <iframe src="https://open.spotify.com/embed/playlist/${playlistId}" width="100%" height="87%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  `;
}
