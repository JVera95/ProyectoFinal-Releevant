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
      <div className="row font-monospace">
        {games?.map((game) => (
          <div
            className="m-auto my-5 col-sm-6"
            style={{ width: "18rem" }}
            key={game._id}
          >
            <img src={game.cover} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{game.title}</h5>
              <p className="card-text">{game.rating}</p>
              <p className="card-text">{game.genre}</p>
              <p className="card-text">{game.platform}</p>
              <p className="card-text">{game.company}</p>
              <p className="card-text">{game.synopsis}</p>
              <p className="card-text">{game.gameModes}</p>
              <p className="card-text">{game.date}</p>
              {/* <iframe
                className="container"
                width="100%"
                height="360"
                src={game.trailer}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
