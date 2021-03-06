import "./Platform.css";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GameVideo from "../../videos/gamevideo.mp4";
import VideoBackground from "../../components/VideoBackground/VideoBackground";

export default function Ps() {
  const [ps, setPs] = useState([]);

  useEffect(() => {
    async function fetchPs() {
      const res = await fetch("http://localhost:8080/ps/PS");
      const json = await res.json();
      setPs(json);
    }
    fetchPs();
  }, []);

  if (!ps) {
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
      <main>
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
                src="https://tec.com.pe/wp-content/uploads/2021/01/hipertextual-the-last-of-us-part-ii-nos-ofrece-breve-vistazo-su-oscura-historia-su-nuevo-trailer-2020682431-scaled-1.jpg"
                alt="tlou"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>The Last of Us 2</h1>
                  <p>
                    The Last of Us Part II es un videojuego de terror y de
                    acci??n y aventuras de 2020 desarrollado por Naughty Dog y
                    publicado por Sony.
                  </p>
                  <p>
                    <a
                      className="btn btn-secondary"
                      href="https://www.naughtydog.com/blog/the_last_of_us_part_ii"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ir a la Web &raquo;
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://image.api.playstation.com/vulcan/ap/rnd/202008/1420/HcLcfeQBXd2RiQaCeWQDCIFN.jpg"
                alt="spiderman"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Spider-Man Miles Morales</h1>
                  <p>
                    Marvel's Spider-Man: Miles Morales es un videojuego de
                    acci??n y aventuras desarrollado por Insomniac Games y
                    publicado por Sony Interactive Entertainment.
                  </p>
                  <p>
                    <a
                      className="btn btn-secondary"
                      href="https://www.playstation.com/es-es/games/marvels-spider-man-miles-morales/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ir a la Web &raquo;
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.pixel4k.com/wp-content/uploads/2020/02/days-gone_1581271999.jpg"
                alt="daysgone"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Days Gone</h1>
                  <p>
                    Days Gone es un videojuego de terror y acci??n-aventura,
                    desarrollado por el estudio SIE Bend Studio y publicado por
                    Sony Interactive Entertainment.
                  </p>
                  <p>
                    <a
                      className="btn btn-secondary"
                      href="https://www.bendstudio.com/game/days-gone"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ir a la Web &raquo;
                    </a>
                  </p>
                </div>
              </div>
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

        <h1 className="text-center mb-5">Pr??ximos lanzamientos</h1>
        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <img
                src="https://images.ctfassets.net/nwksj2ft7iku/49VET5aEeKtil9PJs40BlA/cc75508f1d161b7fd9ce5bed294597a1/hogwarts-legacy-logo-200.jpeg"
                alt="legacy"
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
              />

              <h2>Hogwarts Legacy</h2>
              <p>
                Hogwarts Legacy es un videojuego de rol de mundo abierto que se
                encuentra en desarrollo. Es desarrollado por Avalanche Software
                y distribuido por Portkey Games.
              </p>
              <p>
                <a
                  className="btn btn-secondary"
                  href="https://www.hogwartslegacy.com/es-es"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ir a la Web &raquo;
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src="https://i.blogs.es/493cfd/1366_2000/200_200.jpeg"
                alt="godofwar"
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
              />

              <h2>God of War: Ragnar??k</h2>
              <p>
                God of War: Ragnar??k es un pr??ximo juego de acci??n y aventuras
                en desarrollo por Santa Monica Studio y que ser?? publicado por
                Sony.
              </p>
              <p>
                <a
                  className="btn btn-secondary"
                  href="https://www.playstation.com/es-es/games/god-of-war-ragnarok/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ir a la Web &raquo;
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src="https://i.blogs.es/210dca/ffxvi/200_200.jpeg"
                alt="finalfantasy"
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
              />

              <h2>Final Fantasy XVI</h2>
              <p>
                Final Fantasy XVI es un videojuego de rol de acci??n que est??
                siendo desarrollado por Square Enix para PlayStation 5.
              </p>
              <p>
                <a
                  className="btn btn-secondary"
                  href="https://es.finalfantasyxvi.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ir a la Web &raquo;
                </a>
              </p>
            </div>
          </div>

          <hr className="featurette-divider" />

          {ps?.map((game) => (
            <div key={game._id}>
              <div className="row featurette">
                <div className="col-md-7 order-md-2">
                  <h2 className="featurette-heading">{game.title}</h2>
                  <p className="text-muted">{game.genre}</p>
                  <p className="lead">{game.synopsis}</p>
                  <p>
                    <Link
                      to={`/game/${game._id}`}
                      className="btn btn-secondary"
                    >
                      M??s detalles &raquo;
                    </Link>
                  </p>
                </div>
                <div className="col-md-5 order-md-1">
                  <img
                    src={game.cover}
                    width="100%"
                    alt="gamecover"
                    className="cover"
                  />
                </div>
              </div>
              <hr className="featurette-divider" />
            </div>
          ))}
        </div>

        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center">
            <p className="col-md-4 mb-0 text-muted">
              &copy; 2022 Releevant, Vera
            </p>

            <ul className="nav col-md-4 justify-content-end">
              <li className="nav-item">
                <a
                  href="https://www.linkedin.com/in/jvera95/"
                  className="nav-link px-2 text-muted"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://github.com/JVera95"
                  className="nav-link px-2 text-muted"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://twitter.com/JVera_95"
                  className="nav-link px-2 text-muted"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-up-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </main>
    </>
  );
}
