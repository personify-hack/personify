const userId = "31xlojdxrz4skapenzfcqyqg5ama";
const playlistName = "Sick Playlist";

function createPlaylist() {
  return new Promise((resolve) => {
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

        const url = `https://api.spotify.com/v1/users/${userId}/playlists`;

        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            name: playlistName,
            public: true,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            const playlistId = data.id;
            console.log(
              `Playlist ${playlistName} created with ID ${playlistId}`
            );
          })
          .catch((error) => {
            console.error("Error creating playlist:", error);
          });
      });
  });
}
