import "./Platform.css";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GameVideo from "../../videos/gamevideo.mp4";
import VideoBackground from "../../components/VideoBackground/VideoBackground";

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
                src="https://pressover.news/wp-content/uploads/2021/10/featured-metroid-dread-artwork-01.jpg"
                alt="metroid"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Metroid Dread</h1>
                  <p>
                    Metroid Dread es un videojuego de acción-aventura de 2021 de
                    la serie Metroid, desarrollado por MercurySteam en
                    colaboración con la filial Nintendo EPD y publicado por
                    Nintendo para la consola Nintendo Switch.
                  </p>
                  <p>
                    <a
                      className="btn btn-secondary"
                      href="https://metroid.nintendo.com/"
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
                src="https://sm.ign.com/ign_es/screenshot/default/2022030310455900-336db1da8bdc3bf38ed8609901964a6b_adf7.jpg"
                alt="kirby"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Kirby and the Forgotten Land</h1>
                  <p>
                    Kirby y la tierra olvidada, titulado en inglés como Kirby
                    and the Forgotten Land, es un videojuego de plataformas en
                    3D de la saga Kirby, desarrollado por HAL Laboratory y
                    publicado por Nintendo para la videoconsola Nintendo Switch.
                  </p>
                  <p>
                    <a
                      className="btn btn-secondary"
                      href="https://kirbyandtheforgottenland.nintendo.com/"
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
                src="https://i.ytimg.com/vi/a5ZV1T9E0is/maxresdefault.jpg"
                alt="monsterh"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Monster Hunter Rise</h1>
                  <p>
                    Monster Hunter Rise es un juego de rol de acción
                    desarrollado y publicado por Capcom para Nintendo Switch. Es
                    la entrega más reciente de la saga portátil , perteneciendo
                    a la quinta generación de la saga.
                  </p>
                  <p>
                    <a
                      className="btn btn-secondary"
                      href="https://www.monsterhunter.com/rise/es/"
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

        <h1 className="text-center mb-5">Próximos lanzamientos</h1>
        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <img
                src="https://i.blogs.es/943db5/x720/200_200.jpeg"
                alt="bayonetta"
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
              />

              <h2>Bayonetta 3</h2>
              <p>
                Bayonetta 3 es un videojuego de acción próximo en desarrollo por
                PlatinumGames, y publicado por Nintendo.
              </p>
              <p>
                <a
                  className="btn btn-secondary"
                  href="https://www.platinumgames.com/games/bayonetta-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ir a la Web &raquo;
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src="https://i.blogs.es/7cfe00/466404/200_200.jpeg"
                alt="breath"
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
              />

              <h2>Legend of Zelda: Breath of the Wild 2</h2>
              <p>
                La secuela sin título de The Legend of Zelda: Breath of the Wild
                será un videojuego de acción-aventura de 2023 de la serie The
                Legend of Zelda.
              </p>
              <p>
                <a
                  className="btn btn-secondary"
                  href="https://www.zelda.com/breath-of-the-wild/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ir a la Web &raquo;
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src="https://i.blogs.es/5a382b/mprime2_box_cover_02_hd/200_200.jpeg"
                alt="metroid"
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
              />

              <h2>Metroid Prime 4</h2>
              <p>
                Metroid Prime 4 es un videojuego de acción-aventura en primera
                persona actualmente en desarrollo por Retro Studios para la
                plataforma Nintendo Switch.
              </p>
              <p>
                <a
                  className="btn btn-secondary"
                  href="https://metroid.fandom.com/wiki/Metroid_Prime_4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ir a la Web &raquo;
                </a>
              </p>
            </div>
          </div>

          <hr className="featurette-divider" />

          {nint?.map((game) => (
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
                      Más detalles &raquo;
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
