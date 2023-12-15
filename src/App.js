import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import PlayerPlaylist from "./components/PlayerPlaylist";

function App() {
  return (
    <>
      <Header />
      <div className="player-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="player-playlist">
          <PlayerPlaylist />
        </div>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </>
  );
}

export default App;
