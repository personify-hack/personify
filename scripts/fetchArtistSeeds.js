const CLIENT_ID = "13aca85cd9ab47c4bb0dde8481173e87";
const CLIENT_SECRET = "b90f3294ac6f4f5e8b7123bdc02d622d";

async function fetchArtistSeeds() {
  const artistsInput = document.getElementById("artistsInput");
  const artists = artistsInput.value.split(",");
  console.log(artists);

  const artistIds = await Promise.all(
    artists.map(async (artistName) => {
      const encodedArtistName = encodeURIComponent(artistName);

      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
      });

      const { access_token } = await response.json();

      const url = `https://api.spotify.com/v1/search?type=artist&q=${encodedArtistName}`;

      const artistResponse = await fetch(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const { artists } = await artistResponse.json();
      const artistId = artists.items[0]?.id;

      if (!artistId) {
        console.error(`No artist found for ${artistName}`);
        return null;
      }

      console.log(`The Spotify ID of ${artistName} is ${artistId}`);

      return artistId;
    })
  );

  console.log("All artist IDs have been retrieved:", artistIds.filter(Boolean));
  return artistIds.filter(Boolean);
}
