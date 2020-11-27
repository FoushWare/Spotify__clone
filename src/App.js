import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { useStateValue } from './StateProvider'
import { getTokenFromResponse } from './spotify'
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player'

const s = new SpotifyWebApi();

function App() {

  // ... const [state, dispatch] = useReducer(reducer, initialArg, init);
  const [{ token }, dispatch] = useStateValue();


  useEffect(() => {

    // set Token 
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {

      s.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });


      // Get the User info
      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      // Set the discover Weekly 

      s.getPlaylist("37i9dQZF1DX5CdVP4rz81C").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })

      );

      // SET TOP ARTISTS 
      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      // set the spotify web api global variables 
      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });
      // set My playlists
      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });






































    }

  }, [token, dispatch])



  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={s} />}

    </div>
  );
}

export default App;
