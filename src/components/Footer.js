import React from "react";
import "./Footer.css";
import { ReactComponent as Playicon } from "../assets/Playicon.svg";
import { ReactComponent as Pauseicon } from "../assets/Pauseicon.svg";
import { ReactComponent as Nexticon } from "../assets/Nexticon.svg";
import { ReactComponent as Previcon } from "../assets/Previcon.svg";

export default function Footer() {
  const [isPlaying, setPlaying] = React.useState(false);
  function handleClick() {
    setPlaying(!isPlaying);
  }
  return (
    <div className="footer-container">
      <div className="player-control">
        <Previcon width={"32px"} />
        {isPlaying === false ? (
          <Playicon
            width={"32px"}
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <Pauseicon
            width={"32px"}
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          />
        )}

        <Nexticon width={"32px"} />
      </div>
    </div>
  );
}
