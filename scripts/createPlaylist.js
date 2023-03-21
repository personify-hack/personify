async function createPlaylist() {
	access_token =
		"BQBQh4TAuXKH58JHtcuVutPQ-Z2Z5vENWfdquUoAfFa-DaJJ5dyVUebf1BIpooNeQaeNoiS3rdODnmtwRiqZdvzaInWWvdKcW8dvdukfUN-2-hw3Lncjv5cxN1K8aZJ2X9njKx_dwHYY4t0Csohnxz4dyd03R8USmU6df_DfHjRf4BFXMxqbYBorE1jEZgbW31quHizS2qY3SjGNYmx1WLIwUcDHUDmNrApjHQeuUK3obET1tx2p33-1kLhtFfQcKQ";
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
