async function createPlaylist() {
  const imageURI = "spotify:track:ab67616d0000b273d7c2f65936b1097fdbe8c1a2";
  const response = await fetch(
    "https://api.spotify.com/v1/users/31xlojdxrz4skapenzfcqyqg5ama/playlists",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer BQDzGg0OkNfiRXswp5glZvTThrSZ2QkIzLMOAGN36zXkRiUoQA-7_N3A7zc3q59NmpND1GJBb0zE40IAAXorl5qZNgGx-YhHpiXeXEP3jqrxRxjgtJmEp_RzNJ7Hx8omHRyV97Yti5Qbu-xI9IWobo-1yVQJv1pAnoycRh1QCq2ezLb4bvhVANUodmum32tma05QCe9Ggc4ZO7zqoNcixErxIWjGULuREDy7T4WKf4gbfM9s-WWJm6ZAeSO2Ff9XFyqhULRC0Y2Set61xjBuXNZTlTOYoTOk3-DM5SQTRD4bK54uIh8f6jDV3303l1L1dRF1n11YylCaDg",
      },
      body: JSON.stringify({
        name: "Mazeh Test",
        description: "Sick playlist",
        public: false,
      }),
    }
  );
  const data = await response.json();
  return data;
}
