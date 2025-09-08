import React from "react";
import { Route, Routes } from "react-router-dom";
import Playlist from "./components/Playlist";
import PlaylistDetails from "./components/PlaylistDetails";
import Artists from "./components/Artists";
import ArtistsDetails from "./components/ArtistsDetails";
import Download from "./components/Download";
import Home from "./components/Home";
import AlbumDetails from "./components/AlbumDetails";
import Album from "./components/Album";
import Songs from "./components/Songs";
import Likes from "./components/Likes";
import SongDetails from "./components/SongDetails";
import Import from "./components/Import";
import ads from "ads.txt";
import { Analytics } from '@vercel/analytics/next';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuSL5QAuV1h1r6xGBvIoYpCZsCp45ujTE",
  authDomain: "fastsongup.firebaseapp.com",
  projectId: "fastsongup",
  storageBucket: "fastsongup.firebasestorage.app",
  messagingSenderId: "4767799311",
  appId: "1:4767799311:web:9eb1c2da3517651ee9eb7a",
  measurementId: "G-E72PJNE1XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import React, { useEffect } from 'react';

function AdComponent() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4633437485737999"
     data-ad-slot="3032870719"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
  );
}

export default AdComponent;


const App = () => {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/songs/details/:id" element={<SongDetails />} />
        <Route path="/album" element={<Album />} />
        <Route path="/albums/details/:id" element={<AlbumDetails />} />
        <Route path="/download" element={<Download />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/playlist/details/:id" element={<PlaylistDetails />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/details/:id" element={<ArtistsDetails />} />
        <Route path="/likes" element={<Likes/>} />
        <Route path="/import" element={<Import/>} />
     <Analytics />
      </Routes>
    </div>
  );
};

export default App;
