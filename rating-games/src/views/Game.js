import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

export default function Game() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      const res = await fetch("http://localhost:8080/todo");
      const json = await res.json();
      setGames(json);
    }
    fetchGames();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        {games?.map((game) => (
          <div
            className="mt-5"
            style={{ width: "25%" }}
            key={game._id}
          >
            <img src={game.cover} width="100%" alt="game cover" />
            <div className="m-auto">
              <h5 className="card-title">{game.title}</h5>
              <p className="card-text">{game.rating}</p>
              <p className="card-text">{game.genre}</p>
              <p className="card-text">{game.platform}</p>
              <p className="card-text">{game.company}</p>
              <p className="card-text">{game.synopsis}</p>
              <p className="card-text">{game.gameModes}</p>
              <p className="card-text">{game.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
