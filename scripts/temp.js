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

        const url = ``;

        fetch(url, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            // do stuff
            resolve(data);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  });
}
