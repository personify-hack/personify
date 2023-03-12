async function uploadPlaylistImage(playlist_id) {
  const imageUri = "<image_uri>";
  const accessToken =
    "BQDzGg0OkNfiRXswp5glZvTThrSZ2QkIzLMOAGN36zXkRiUoQA-7_N3A7zc3q59NmpND1GJBb0zE40IAAXorl5qZNgGx-YhHpiXeXEP3jqrxRxjgtJmEp_RzNJ7Hx8omHRyV97Yti5Qbu-xI9IWobo-1yVQJv1pAnoycRh1QCq2ezLb4bvhVANUodmum32tma05QCe9Ggc4ZO7zqoNcixErxIWjGULuREDy7T4WKf4gbfM9s-WWJm6ZAeSO2Ff9XFyqhULRC0Y2Set61xjBuXNZTlTOYoTOk3-DM5SQTRD4bK54uIh8f6jDV3303l1L1dRF1n11YylCaDg";

  const url = `https://api.spotify.com/v1/playlists/${playlist_id}/images`;

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };

  const data = {
    image: imageUri,
  };

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error(error);
  }
}
