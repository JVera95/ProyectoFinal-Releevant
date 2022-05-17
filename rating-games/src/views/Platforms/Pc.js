import "./carousel.css";
import "./carousel.rtl.css";
import "./Platform.css";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GameVideo from "../../videos/gamevideo.mp4";
import VideoBackground from "../../components/VideoBackground/VideoBackground";

export default function Pc() {
  const [pc, setPc] = useState([]);

  useEffect(() => {
    async function fetchPc() {
      const res = await fetch("http://localhost:8080/pc/PC");
      const json = await res.json();
      setPc(json);
    }
    fetchPc();
  }, []);

  if (!pc) {
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
  // console.log("desde pc", pc);

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
                src="https://www.nme.com/wp-content/uploads/2022/01/Zomboid-Louiseville-2000x1270-1.jpg"
                alt="projectzomboid"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Project Zomboid</h1>
                  <p>
                    Project Zomboid es un videojuego de terror de supervivencia
                    isométrico de mundo abierto desarrollado por el
                    desarrollador independiente británico y canadiense The Indie
                    Stone.
                  </p>
                  <p>
                    <a
                      className="btn btn-secondary"
                      href="https://projectzomboid.com/blog/"
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
                src="https://allimages.sgp1.digitaloceanspaces.com/bestreviewgamescom/2022/01/1641780873_6_50-Best-Valorant-Wallpapers.jpg"
                alt="valorant"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Valorant</h1>
                  <p>
                    Valorant es un videojuego de disparos en primera persona
                    multijugador gratuito desarrollado y publicado por Riot
                    Games.
                  </p>
                  <p>
                    <a
                      className="btn btn-secondary"
                      href="https://playvalorant.com/es-es/"
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
                src="https://wallegend.net/uploads/cdn/1280x720/g/MTY0MDE3MDgwNV8yMzgwLmpwZw==.jpg"
                alt="valorant"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Rocket League</h1>
                  <p>
                    Rocket League es un videojuego que combina el fútbol con los
                    vehículos. Fue desarrollado por Psyonix y lanzado el 7 de
                    julio de 2015. Fue lanzado Free to play en septiembre de
                    2020.
                  </p>
                  <p>
                    <a
                      className="btn btn-secondary"
                      href="https://www.rocketleague.com/es-es/"
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

        <div data-aos="fade-up">
          <h1 className="text-center mb-5">Próximos lanzamientos</h1>
          <div className="container marketing">
            <div className="row">
              <div className="col-lg-4">
                <img
                  src="https://www.clavecd.es/wp-content/uploads/diablo-4-small1-231x300.jpg"
                  alt="diablo"
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                />

                <h2>Diablo IV</h2>
                <p>
                  Diablo IV es un videojuego en desarrollo perteneciente al
                  género de rol de acción, desarrollado por la empresa Blizzard
                  Entertainment.
                </p>
                <p>
                  <a
                    className="btn btn-secondary"
                    href="https://diablo4.blizzard.com/es-es/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ir a la Web &raquo;
                  </a>
                </p>
              </div>
              <div className="col-lg-4">
                <img
                  src="https://i.blogs.es/bccb60/hollow-knight-silksong/200_200.jpg"
                  alt="hollow"
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                />

                <h2>Hollow Knight: Silksong</h2>
                <p>
                  Hollow Knight: Silksong es un videojuego en desarrollo del
                  género Metroidvania, desarrollado y publicado por Team Cherry.
                </p>
                <p>
                  <a
                    className="btn btn-secondary"
                    href="https://www.hollowknightsilksong.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ir a la Web &raquo;
                  </a>
                </p>
              </div>
              <div className="col-lg-4">
                <img
                  src="https://i.blogs.es/2a9ec0/stalker-2/200_200.jpeg"
                  alt="stalker"
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                />

                <h2>S.T.A.L.K.E.R. 2</h2>
                <p>
                  STALKER 2 será un videojuego del género de disparos en primera
                  persona ambientado en un futuro postapocalíptico.
                </p>
                <p>
                  <a
                    className="btn btn-secondary"
                    href="https://www.stalker2.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ir a la Web &raquo;
                  </a>
                </p>
              </div>
            </div>

            <hr className="featurette-divider" />

            {pc?.map((game) => (
              <>
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
                        Más detalles &raquo;
                      </Link>
                    </p>
                  </div>
                  <div className="col-md-5 order-md-1">
                    <img
                      src={game.cover}
                      width="100%"
                      alt="gamecover"
                      className="imgcover cover"
                    />
                  </div>
                </div>
                <hr className="featurette-divider" />
              </>
            ))}
          </div>
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
