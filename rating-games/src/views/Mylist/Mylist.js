import "./Mylist.css";
import Navbar from "../../components/Navbar";
import GameVideo from "../../videos/gamevideo.mp4";
import VideoBackground from "../../components/VideoBackground/VideoBackground";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MyList() {
  const [myList, setMyList] = useState([]);
  // console.log({ myList });
  useEffect(() => {
    async function fetchMyList() {
      const res = await fetch("http://localhost:8080/mylist");
      const json = await res.json();
      setMyList(json[0].fav);
      // console.log("log de json", json);
    }
    fetchMyList();
  }, []);

  // async function handleDelete(id) {
  //   let response = await fetch(`http://localhost:8080/deletefav/${id}`, {
  //     mode: "cors",
  //     method: "DELETE",
  //   });
  //   let json = await response.json();
  //   setMyList(json);
  // }

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
      <h2 className="text-center mt-5">Mi lista de juegos</h2>
      <div className="container marketing mt-5">
        <hr className="featurette-divider" />
        {myList &&
          myList.map((game) => (
            <>
              <div className="row featurette">
                <div className="col-md-7 order-md-2">
                  <h2 className="featurette-heading">{game.title}</h2>
                  <p>
                    <Link
                      to={`/game/${game.id}`}
                      className="btn btn-secondary mt-5"
                    >
                      Más detalles &raquo;
                    </Link>

                    {/* <button
                      className="btn btn-danger buttonmylist mt-5"
                      onClick={() => handleDelete(game.id)}
                    >
                      Eliminar de mi lista
                    </button> */}
                  </p>
                </div>
                <div className="col-md-5 order-md-1">
                  <img
                    src={game.cover}
                    width="75%"
                    alt="gamecover"
                    className="imgcover covermylist"
                  />
                </div>
              </div>
              <hr className="featurette-divider" />
            </>
          ))}
      </div>
    </>
  );
}
