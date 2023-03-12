async function createPlaylist() {
  access_token =
    "BQBsRQG_kPtP-RzmPRFheQXx3xHPkHwMKZzj2iPisIwimeSiFjQSsBfnhy5DPu6wvAHwuOsfT1GapybCV3Cm-uYdPTvehrRxvHZJF-qWF_KEWflcg0VxU3eDV4g6KIPK35RS-R1CfzugVmOfHgQQh8qVBhnxK6JX4QAxRU7S427ACeF0mVJDkZPJuBnjqfBJABC8pNFytz33R2d6BTEBb55vO1KUFPItzZ5RiOKi1kV7SYBxgGloZfiYKiqqnvQObiECoOcv4ol0shQlYHqoNcitqLKlbPoDObTphKpsonkxK3kBYLT05Ai63FdaaiCiahhX-e_DxUNhRg";
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
        name: "Mazeh Test",
        description:
          "A personalized playlist curated just for you created by Personify!",
      }),
    }
  );
  const data = await response.json();
  return data;
}
