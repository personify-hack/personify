function addTracksToPlaylist(playlistId, trackUris) {
  const access_token =
    "BQArKAIcLZkw8bMiSZB_Lu5JcE_l3IU7pK9deH2Tla5thD9tAjbSOvzT4N6JuNfj7wobeZmpOMmbtKA2BKBW5AW22kyjSN318u_dEsala19lLRLkD2_vLGaS65WMt3xVJKhMsrMrlBpGzSHfKQn5JcYybBidz04wxdWIYaTq6rG34eGJ5j2F1vpJ5Fe1XcBHlnU6AHOj738gQfQn6R415K3A2jS4Q8axA_Cb-ij5yN-lAsbOWw9cT2OXawBag9mDkCQ-83obi0O1gYydmy6M6Iwaim1QqLYFvM1ZFOBnktdgULMypZLRdiwYJq8ak5F9lOWzXXpAZINObw";
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
