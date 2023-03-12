function getRecommendations() {
  const CLIENT_ID = "13aca85cd9ab47c4bb0dde8481173e87";
  const CLIENT_SECRET = "b90f3294ac6f4f5e8b7123bdc02d622d";

  const credentials = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

  fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  })
    .then((response) => response.json())
    .then((data) => {
      const access_token = data.access_token;

      // Get recommendations based on genre, artists, BPM, and mood
      const seed_genres = "pop";
      const seed_artists = "66CXWjxzNUsdJxJ2JdwvnR";
      const target_valence = 0;

      const url = `https://api.spotify.com/v1/recommendations?seed_genres=${seed_genres}&seed_artists=${seed_artists}&target_valence=${target_valence}`;

      fetch(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Do something with the recommended tracks
        })
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));
}
