import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GameVideo from "../videos/gamevideo.mp4";
import VideoBackground from "../components/VideoBackground/VideoBackground";

export default function Toprating() {
  const [rating, setRating] = useState([]);

  useEffect(() => {
    async function fetchRating() {
      const res = await fetch("http://localhost:8080/toprating");
      const json = await res.json();
      setRating(json);
    }
    fetchRating();
  }, []);

  if (!rating) {
    return (
      <div className="text-center">
        <div
          className="spinner-grow"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }
  console.log(rating);

  return (
    <>
      <Navbar />
      <VideoBackground video={GameVideo} />
      <div className="mt-3">
        <h2 className="text-center mt-5">Top juegos mejor valorados</h2>
        {rating?.map((game) => (
          <ul className="list-group w-50 m-auto my-5">
            <li className="list-group-item list-group-item-dark">
              <span className="text-success">{game.rating} </span>
              <span>{game.title}</span>
              <Link
                to={`/game/${game._id}`}
                className="btn btn-secondary position-absolute bottom-0 end-0"
              >
                Más detalles &raquo;
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}
