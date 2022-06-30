const clientId = "";//leave blank for github
const redirectUri = "http://localhost:3000/";

let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // Check for access token match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      //This clears the parameters, allowing us to grab a new access token when it expires.
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}_ID&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },


  search(term) {
    const accessToken = Spotify.getAccessToken();
    fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`).then(response => {
        if(response.ok) {
            return response.json();
        }
    })
  }
};

export default Spotify;
