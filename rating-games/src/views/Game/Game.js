import "./Game.css";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GameVideo from "../../videos/gamevideo.mp4";
import VideoBackground2 from "../../components/VideoBackground2/VideoBackground2";

export default function Game() {
  const [game, setGame] = useState(null);
  const { _id } = useParams();

  useEffect(() => {
    async function fetchGame() {
      const res = await fetch(`http://localhost:8080/game/${_id}`);
      const json = await res.json();
      setGame(json);
    }
    fetchGame();
  }, [_id]);

  if (!game) {
    return (
      <div className="text-center">
        <div
          className="spinner-grow"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <VideoBackground2 video={GameVideo} />
      <div className="container-game bg-dark">
        <div className="mt-5" style={{ width: "25%" }}>
          <img src={game[0].cover} width="100%" alt="game cover" />
          <div className="m-auto">
            <div className="title">{game[0].title}</div>
            <p>{game[0].gameModes}</p>
          </div>
        </div>
      </div>
    </>
  );
}
