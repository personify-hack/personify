function addTracksToPlaylist(playlistId, trackUris) {
  const access_token =
    "BQBsRQG_kPtP-RzmPRFheQXx3xHPkHwMKZzj2iPisIwimeSiFjQSsBfnhy5DPu6wvAHwuOsfT1GapybCV3Cm-uYdPTvehrRxvHZJF-qWF_KEWflcg0VxU3eDV4g6KIPK35RS-R1CfzugVmOfHgQQh8qVBhnxK6JX4QAxRU7S427ACeF0mVJDkZPJuBnjqfBJABC8pNFytz33R2d6BTEBb55vO1KUFPItzZ5RiOKi1kV7SYBxgGloZfiYKiqqnvQObiECoOcv4ol0shQlYHqoNcitqLKlbPoDObTphKpsonkxK3kBYLT05Ai63FdaaiCiahhX-e_DxUNhRg";
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
