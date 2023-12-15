import React from "react";
import "./Sidebar.css";
import { ReactComponent as HomeIcon } from "../assets/Homeicon.svg";
import { ReactComponent as LibraryIcon } from "../assets/Libraryicon.svg";
import { ReactComponent as NextIcon } from "../assets/Nexticon.svg";
import { ReactComponent as PrevIcon } from "../assets/Previcon.svg";
import { ReactComponent as PlayIcon } from "../assets/Playicon.svg";
import { ReactComponent as SearchIcon } from "../assets/Searchicon.svg";
import { ReactComponent as PauseIcon } from "../assets/Pauseicon.svg";

const myPlaylist = [
  { id: 1, name: "Ashish" },
  { id: 2, name: "Pritam" },
  { id: 3, name: "Hema" },
  { id: 4, name: "Jubin" },
  { id: 5, name: "Hrushikesh" },
  { id: 6, name: "Mohit" },
  { id: 7, name: "Neha Kakkar" },
  { id: 8, name: "Prakhar" },
];
export default function Sidebar() {
  return (
    <div className="side-bar-container">
      <div className="side-bar-items">
        <HomeIcon width={"18px"} strokeWidth={"2px"} /> Home
      </div>
      <div className="side-bar-items">
        <SearchIcon width={"18px"} strokeWidth={"2px"} /> Search
      </div>
      <div className="side-bar-items">
        <LibraryIcon width={"18px"} strokeWidth={"2px"} /> Your Library
      </div>
      <div className="side-options">
        {myPlaylist.map((item) => {
          return (
            <div className="side-bar-items" key={item.id}>
              {item.name}
            </div> // This line was corrected
          );
        })}
      </div>
    </div>
  );
}
