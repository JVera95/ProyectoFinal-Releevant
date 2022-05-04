import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nint() {
  const [nint, setNint] = useState([]);

  useEffect(() => {
    async function fetchNint() {
      const res = await fetch("http://localhost:8080/nint/NINT");
      const json = await res.json();
      setNint(json);
    }
    fetchNint();
  }, []);

  if (!nint) {
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
      <div className="container">
        {nint?.map((game) => (
          <div className="mt-5" style={{ width: "25%" }} key={game._id}>
            <img src={game.cover} width="100%" alt="game cover" />
            <div className="m-auto">
              <h5 className="card-title">{game.title}</h5>
              <p className="card-text text-success">{game.rating}</p>
              <p className="card-text">{game.genre}</p>
              <p className="card-text">{game.platform}</p>
              <p className="card-text">{game.company}</p>
              <p className="card-text">{game.synopsis}</p>
              <p className="card-text">{game.gameModes}</p>
              <p className="card-text">{game.date}</p>
              <Link to={`/game/${game._id}`} className="btn btn-danger">
                Detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
