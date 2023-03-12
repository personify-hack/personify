async function getRecommendations() {
  const artist_seeds = await fetchArtistSeeds();
  console.log(artist_seeds);
  const recommended = await fetchRecommendedApi(artist_seeds);
  console.log(recommended);
}
