import "./Game.css";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GameVideo from "../../videos/gamevideo.mp4";
import VideoBackground from "../../components/VideoBackground/VideoBackground";
import Fav from "../../components/Fav/Fav"

export default function Game({id}) {
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
      <VideoBackground video={GameVideo} />
      <div className="container-game bg-dark">
      {game?.map((game) => (
        <>
          <main>
            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <button className="gamerating text-success">{game.rating}</button>
                <h2 className="featurette-heading gametitle mt-5">{game.title}</h2>
                <p className="text-muted mt-5">{game.genre}</p>
                <p className="lead">{game.synopsis}</p>
                <hr className="game-divider"/>
                <p className="box2">{game.genre}</p>
                <p className="box2">{game.company}</p>
                <p className="box2">{game.gameModes}</p>
                <p className="box2">{game.platform}</p>
                <p className="box2">{game.date}</p>
                <p className="favbuttongame">
                <Fav id={id}></Fav>
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                <img
                  src={game.cover}
                  width="80%"
                  alt="gamecover"
                  className="imgcover gamecover"
                />
              </div>
            </div>
          </main>

        <hr className="featurette-divider"/>

        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={game.images[0]}
                alt="imggame1"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="carousel-item">
              <iframe
                width="100%"
                height="100%"
                src={game.trailer}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="carousel-item">
              <img
                src={game.images[1]}
                alt="imggame2"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
        </>
      ))}

      </div>
    </>
  );
}

        {/* <div className="flex-container">
          <img className="gamecover" src={game.cover} width="35%" alt="game cover" />
          <div>
              <h1 className="gametitle mt-5 boxtitle">{game.title}</h1>
              <p className="gamecontent box">{game.synopsis}</p>
              <hr className="game-divider"/>
              <p className="box2">{game.genre}</p>
              <p className="box2">{game.company}</p>
              <p className="box2">{game.gameModes}</p>
              <p className="box2">{game.platform}</p>
              <p className="box2">{game.date}</p>
              <Fav className="gamefav" id={id}></Fav>
          </div>
            <p className="">{game.rating}</p>
        </div> */}
