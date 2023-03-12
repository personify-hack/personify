async function createPlaylist() {
  access_token =
    "BQDzExpwFsxYt3L4-R-MjLXgtLJsHlv2pb2djzRcKC6EY13qcUQ8JQ5rVu_0iW2frYtgolb8fc4oBE6vjqpBvOacjWURcbjRCPxjDxe6Drgezx_FtAWQ696g7oq1Y-XCZEgW2nmAGPpyk6cmefKFbMCdL78rZC8p9PaaC42V4-ZSXo7OdbwrZgZQ9oLgVf9bJvEz2nGZ4-ktDCvowLuRK4uF41u3sFbhIba5Ozg7JlS1h_g6R_ls-QOnsGkkPQjNOuj1P7-pUMC9Qckx_mn_FEN-py5-9YP8ymrwIof2GXkRVvomusTT97gLY8PtDbF8WzXh3fGurM5EPw";
  const response = await fetch(
    "https://api.spotify.com/v1/users/31xlojdxrz4skapenzfcqyqg5ama/playlists",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        name: "Your Mood",
        description:
          "A personalized playlist curated just for you created by Personify!",
      }),
    }
  );
  const data = await response.json();
  return data;
}
