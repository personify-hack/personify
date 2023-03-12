async function getRecommendations() {
  const artist_ids = await fetchArtistIds();
  const recommended = await fetchRecommendedApi(artist_ids);
  const playlist = await createPlaylist();
  console.log(recommended);
}
