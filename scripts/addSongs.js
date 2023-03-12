function addTracksToPlaylist(playlistId, trackUris) {
  const access_token =
    "BQBDeCaLIcEdFU6mAbE7enpNV5QUjQugbp8K4iyznkBwo8mojQ9Xe9cqsBXCW504iePTAyKAej_oxTcCJtBvAvo9oJF4tmqDyx-aju4mhO3hOmQpp3fnuoJil_RaTJZMFKOFK6rU04RH4udhCRcpkn8VzscmQ7dpo2xZ0wm3aei342p2bXnVYWtxx26oBUI0iEu0ycpufeSFKhCRmL9p6yn9pZ9MikNK5gI3CLqT1L32aoFQv9at3lgTmx6DXksfKbtlHIujjlYjSgeunVigJ3Hx_Px7KDVqvbcPbYhs_tKBWSyxnSnv5cWcc2HrJv5BE7XXaOSmykH7Gw";
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
