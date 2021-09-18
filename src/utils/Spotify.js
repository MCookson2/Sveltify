import { clientId, redirectUri } from "./keys";

const clientID = clientId;
const redirectURI = redirectUri;

let accessToken;

const Spotify = {
    getAccessToken() {
        // If access token already exists simply returns it.
        if (accessToken) {
            return accessToken
        }

        // Little algorithm to grab the accessToken from the url.
        // Need to update to record expire time of token and refresh browsers after expire time is up.
        const hash = window.location.hash.substring(1);
        const accessString = hash.indexOf('&');
        accessToken = hash.substring(13, accessString);

        if (accessToken) {
            return accessToken
        } else {
            /* if the access token does not exists yet I.E first visiting the website.
               window.location is called which redirects user to the spotify auth login url.
               once logged in it redirects user back to the site.
            */
            const accessUrl =`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = accessUrl;
        }
    },

    // Accesses spotify search api with access token.
    search(term) {
        const token = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?q=${term}&type=track`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(result => result.json()                // Once fetch has finished, converts results to json
         ).then(jsonResult => jsonResult.tracks.items  // Json results -> grabs the item objects of the tracks object.
         ).then(tracks => tracks.map((track) => {      // Map over items object which is an array of objects containing track information
            return {
                name: track.name,                      // Saving values in an object that matches up with the searchResults state in App.js
                artist: track.artists[0].name,
                album: track.album.name
            }
         }))
    },

    // BELOW is not functional yet, commented out for now. 
    // Want to include this function later, but need to design it first.

    // accessPlaylists() {
    //     const token = Spotify.getAccessToken();
    //     const result = fetch("https://api.spotify.com/v1/me/playlists", {
    //         method: "GET",
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     });
    //     return console.log(result);
    // }
}

export default Spotify;