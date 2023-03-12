function addTracksToPlaylist(playlistId, trackUris) {
  const access_token =
    "BQDzExpwFsxYt3L4-R-MjLXgtLJsHlv2pb2djzRcKC6EY13qcUQ8JQ5rVu_0iW2frYtgolb8fc4oBE6vjqpBvOacjWURcbjRCPxjDxe6Drgezx_FtAWQ696g7oq1Y-XCZEgW2nmAGPpyk6cmefKFbMCdL78rZC8p9PaaC42V4-ZSXo7OdbwrZgZQ9oLgVf9bJvEz2nGZ4-ktDCvowLuRK4uF41u3sFbhIba5Ozg7JlS1h_g6R_ls-QOnsGkkPQjNOuj1P7-pUMC9Qckx_mn_FEN-py5-9YP8ymrwIof2GXkRVvomusTT97gLY8PtDbF8WzXh3fGurM5EPw";
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
