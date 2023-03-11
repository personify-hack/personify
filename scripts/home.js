function getRecommendations() {
  // Obtain access token from localStorage
  var access_token = localStorage.getItem("spotify_access_token");
  process.env.ID;
  // Set up API request parameters
  var artist = document.getElementById("artist").value;
  var genre = document.getElementById("genre").value;
  var limit = 10;

  // Construct API request URL with parameters
  var api_url =
    "https://api.spotify.com/v1/recommendations?" +
    "seed_artists=" +
    encodeURIComponent(artist) +
    "&seed_genres=" +
    encodeURIComponent(genre) +
    "&limit=" +
    encodeURIComponent(limit);

  // Send GET request to API with authorization header
  fetch(api_url, {
    headers: {
      Authorization: "Bearer " + access_token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Process response data and display recommendations on page
      var recommendations = document.getElementById("recommendations");
      recommendations.innerHTML = "";
      data.tracks.forEach((track) => {
        var li = document.createElement("li");
        li.innerText =
          track.name +
          " - " +
          track.artists.map((artist) => artist.name).join(", ");
        recommendations.appendChild(li);
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Error obtaining recommendations. Please try again.");
    });
}
