async function getRecommendations() {
  const artist_ids = await fetchArtistIds();
  const recommended = await fetchRecommendedApi(artist_ids);
  console.log(recommended);

  const playlist = await createPlaylist();

  console.log(playlist);

  trackURIS = [];
  recommended.tracks.forEach((track) => {
    trackURIS.push(track.uri);
  });

  const songs = await addTracksToPlaylist(playlist.id, trackURIS);
}
