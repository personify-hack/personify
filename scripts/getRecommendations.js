async function getRecommendations() {
  const artist_ids = await fetchArtistIds();
  const recommended = await fetchRecommendedApi(artist_ids);
  console.log(recommended);

  const playlist = await createPlaylist();
}
