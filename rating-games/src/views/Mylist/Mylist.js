import "./Mylist.css";
import Navbar from "../../components/Navbar";
import GameVideo from "../../videos/gamevideo.mp4";
import VideoBackground from "../../components/VideoBackground/VideoBackground";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function MyList() {
  const [myList, setMyList] = useState([]);
  // const { _id } = useParams();

  if (!myList) {
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

  return (
    <>
      <Navbar />
      <VideoBackground video={GameVideo} />
      <div className="mt-3">
        <h2 className="text-center mt-5">Mi lista de juegos</h2>
        {myList?.map((game) => (
          <ul className="list-group w-50 m-auto my-5">
            <li className="list-group-item list-group-item-dark">
              <span>{game.myList}</span>
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
