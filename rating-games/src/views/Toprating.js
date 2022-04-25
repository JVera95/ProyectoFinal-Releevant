import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

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

  return (
    <>
      <Navbar />
      <div className="font-monospace">
        <h2 className="text-center mt-5">Top juegos mejor valorados</h2>
        {rating?.map((game) => (
          <ul className="list-group w-50 m-auto my-5">
            <li className="list-group-item list-group-item-dark">
              <span className="text-success">{game.rating} </span>
              <span>{game.title}</span>
              <button className="btn btn-danger position-absolute bottom-0 end-0">
                Ver
              </button>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}
