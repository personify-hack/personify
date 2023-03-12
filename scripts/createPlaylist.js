async function createPlaylist() {
  access_token =
    "BQBDeCaLIcEdFU6mAbE7enpNV5QUjQugbp8K4iyznkBwo8mojQ9Xe9cqsBXCW504iePTAyKAej_oxTcCJtBvAvo9oJF4tmqDyx-aju4mhO3hOmQpp3fnuoJil_RaTJZMFKOFK6rU04RH4udhCRcpkn8VzscmQ7dpo2xZ0wm3aei342p2bXnVYWtxx26oBUI0iEu0ycpufeSFKhCRmL9p6yn9pZ9MikNK5gI3CLqT1L32aoFQv9at3lgTmx6DXksfKbtlHIujjlYjSgeunVigJ3Hx_Px7KDVqvbcPbYhs_tKBWSyxnSnv5cWcc2HrJv5BE7XXaOSmykH7Gw";
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
