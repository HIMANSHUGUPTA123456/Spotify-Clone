import React from "react";
import "./PlayerPlaylist.css";

const Playlist = [
  {
    id: 1,
    title: "Sugar",
    artist: "Maroon 5",
    album: "V",
    duration: "3:45",
  },
  {
    id: 2,
    title: "Love You Zindagi",
    artist: "Arijit Singh",
    album: "Dear Zindagi",
    duration: "4:15",
  },
  {
    id: 3,
    title: "Shape Of You",
    artist: "Ed Sheeran",
    album: "Divide",
    duration: "3:53",
  },
  {
    id: 4,
    title: "See You Again",
    artist: "Wiz Khalifa",
    album: "Furious 7",
    duration: "3:58",
  },
  {
    id: 5,
    title: "Lemonade",
    artist: "Diljit",
    album: "Soorma",
    duration: "3:15",
  },
  {
    id: 6,
    title: "Dilbar",
    artist: "Neha Kakkar",
    album: "Satyamev Jaytey",
    duration: "3:30",
  },
  {
    id: 7,
    title: "Tera Ban Jaunga",
    artist: "Kabir Singh",
    album: "Kabir Singh",
    duration: "3:45",
  },
];
export default function PlayerPlaylist() {
  return (
    <div className="player-playlist-container">
      <div className="player-playlist-header">
        <div className="playlist-image-card"></div>

        <div className="playlist-body">
          <p>PLAYLIST</p>
          <h1>Best Of Mine</h1>
        </div>
      </div>
      <div className="playlist-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Album</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {Playlist.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.album}</td>
                  <td>{item.duration}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
