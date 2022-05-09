import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <div className="mt-3">
        <h2 className="text-center mt-5">Top juegos mejor valorados</h2>
        {rating?.map((game) => (
          <ul className="list-group w-50 m-auto my-5">
            <li className="list-group-item list-group-item-dark">
              <span className="text-success">{game.rating} </span>
              <span>{game.title}</span>
              <Link
                to=""
                className="btn btn-outline-dark position-absolute bottom-0 end-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}
