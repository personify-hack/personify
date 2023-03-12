async function createPlaylist() {
  access_token =
    "BQArKAIcLZkw8bMiSZB_Lu5JcE_l3IU7pK9deH2Tla5thD9tAjbSOvzT4N6JuNfj7wobeZmpOMmbtKA2BKBW5AW22kyjSN318u_dEsala19lLRLkD2_vLGaS65WMt3xVJKhMsrMrlBpGzSHfKQn5JcYybBidz04wxdWIYaTq6rG34eGJ5j2F1vpJ5Fe1XcBHlnU6AHOj738gQfQn6R415K3A2jS4Q8axA_Cb-ij5yN-lAsbOWw9cT2OXawBag9mDkCQ-83obi0O1gYydmy6M6Iwaim1QqLYFvM1ZFOBnktdgULMypZLRdiwYJq8ak5F9lOWzXXpAZINObw";
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
