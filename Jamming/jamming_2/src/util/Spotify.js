
const clientId = '1c04e9d0729345409929f5de163ff7dc'
const redirectUri = 'http://localhost:3000/'
let accessToken;
const Spotify = {
    getAccessToken(accessToken){
        if(accessToken){
            return accessToken;
        }

        //check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const experisInMatch = window.location.href.match(/access_token=([^&]*)/);

        if(accessTokenMatch && experisInMatch){
            accessToken = accessTokenMatch[1]
            const experisIn = Number(experisInMatch[1])

            window.setTimeout(() => accessToken = '', experisIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken
        }else{
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
            window.location = accessUrl;
        }
    }

    search(term){
        const accessToken = Spotify.getAccessToken;
        return fetch('')
    }
}



export default Spotify;