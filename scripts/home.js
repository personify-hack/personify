function getHomeValues() {
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
