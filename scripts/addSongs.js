function addTracksToPlaylist(playlistId, trackUris) {
  const access_token =
    "BQDzGg0OkNfiRXswp5glZvTThrSZ2QkIzLMOAGN36zXkRiUoQA-7_N3A7zc3q59NmpND1GJBb0zE40IAAXorl5qZNgGx-YhHpiXeXEP3jqrxRxjgtJmEp_RzNJ7Hx8omHRyV97Yti5Qbu-xI9IWobo-1yVQJv1pAnoycRh1QCq2ezLb4bvhVANUodmum32tma05QCe9Ggc4ZO7zqoNcixErxIWjGULuREDy7T4WKf4gbfM9s-WWJm6ZAeSO2Ff9XFyqhULRC0Y2Set61xjBuXNZTlTOYoTOk3-DM5SQTRD4bK54uIh8f6jDV3303l1L1dRF1n11YylCaDg";

  const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
  return fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ uris: trackUris }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`Tracks added to playlist with ID ${playlistId}`);
      return data;
    })
    .catch((error) => {
      console.error("Error adding tracks to playlist:", error);
    });
}
