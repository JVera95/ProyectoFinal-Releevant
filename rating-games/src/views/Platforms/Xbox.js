import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GameVideo from "../../videos/gamevideo.mp4";
import VideoBackground from "../../components/VideoBackground/VideoBackground";

export default function Xbox() {
  const [xbox, setXbox] = useState([]);

  useEffect(() => {
    async function fetchXbox() {
      const res = await fetch("http://localhost:8080/xbox/XBOX");
      const json = await res.json();
      setXbox(json);
    }
    fetchXbox();
  }, []);

  if (!xbox) {
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
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              class="active"
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
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://www.comunidadxbox.com/wp-content/uploads/logo-de-Gears-of-War5-e1548746760629.jpg"
                alt="gears5"
                style={{
                  objectFit: "cover",
                }}
              />
              <div class="container">
                <div class="carousel-caption text-start">
                  <h1>Gears 5</h1>
                  <p>
                    Gears 5 es un videojuego de acción en tercera persona
                    desarrollado por The Coalition y publicado por Xbox Game
                    Studios para Microsoft Windows y Xbox One.
                  </p>
                  <p>
                    <a
                      class="btn btn-secondary"
                      href="https://www.gears5.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ir a la Web &raquo;
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://cl.buscafs.com/www.levelup.com/public/uploads/images/728736/728736_1140x516.jpg"
                alt="halo"
                style={{
                  objectFit: "cover",
                }}
              />
              <div class="container">
                <div class="carousel-caption text-start">
                  <h1>Halo Infinite</h1>
                  <p>
                    Halo Infinite es un videojuego de disparos en primera
                    persona de la franquicia de videojuegos de ciencia ficción
                    creada por Bungie Studios y actualmente desarrollada por 343
                    Industries.
                  </p>
                  <p>
                    <a
                      class="btn btn-secondary"
                      href="https://www.halowaypoint.com/es-es"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ir a la Web &raquo;
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://www.ginx.tv/uploads2/Sea_of_Thieves/Sea_of_Thieves_Season_3_Plunder_Pass/Dark_Brethren_Tall_Tale/The_Dark_Brethren_cover.webp"
                alt="soth"
                style={{
                  objectFit: "cover",
                }}
              />
              <div class="container">
                <div class="carousel-caption text-start">
                  <h1>Sea of Thieves</h1>
                  <p>
                    Sea of Thieves es un videojuego de acción-aventura en
                    primera persona desarrollado por Rare y distribuido por Xbox
                    Game Studios.
                  </p>
                  <p>
                    <a
                      class="btn btn-secondary"
                      href="https://www.seaofthieves.com/es"
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
            class="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
          </button>
        </div>

        <h1 className="text-center mb-5">Próximos lanzamientos</h1>
        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <img
                src="https://compass-ssl.xbox.com/assets/68/b1/68b154ad-7f9e-4ba9-9c15-04c247b8ec8b.jpg?n=Starfield_Sharing_200x200.jpg"
                alt="starfield"
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
              />

              <h2>Starfield</h2>
              <p>
                Starfield es un próximo videojuego de rol de ciencia ficción
                desarrollado por Bethesda Game Studios.
              </p>
              <p>
                <a
                  className="btn btn-secondary"
                  href="https://bethesda.net/en/game/starfield"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ir a la Web &raquo;
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src="https://i.blogs.es/0169d6/hellblade-2/200_200.jpeg"
                alt="hellblade"
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
              />

              <h2>Senua's Saga: Hellblade II</h2>
              <p>
                Senua's Saga: Hellblade II es el segundo videojuego desarrollado
                por Ninja Theory desde su compra por parte de Microsoft.
              </p>
              <p>
                <a
                  className="btn btn-secondary"
                  href="https://www.xbox.com/en-US/games/senuas-saga-hellblade-II"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ir a la Web &raquo;
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src="https://compass-ssl.xbox.com/assets/e8/1f/e81f62ca-fe9a-4714-8557-fab830d0d014.jpg?n=724133_Sharing_200x200.jpg"
                alt="fable"
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
              />

              <h2>Fable</h2>
              <p>
                Fable 4 es un juego exclusivo de Microsoft y, por lo tanto, se
                lanzará en Xbox, y quizá en PC.
              </p>
              <p>
                <a
                  className="btn btn-secondary"
                  href="https://www.xbox.com/en-US/games/fable"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ir a la Web &raquo;
                </a>
              </p>
            </div>
          </div>

          <hr className="featurette-divider" />

          {xbox?.map((game) => (
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
                  <img src={game.cover} width="100%" alt="gamecover" />
                </div>
              </div>
              <hr className="featurette-divider" />
            </>
          ))}
        </div>

        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center">
            <p className="col-md-4 mb-0 text-muted">
              &copy; 2022 Releevant, Vera
            </p>

            <ul class="nav col-md-4 justify-content-end">
              <li class="nav-item">
                <a
                  href="https://www.linkedin.com/in/jvera95/"
                  className="nav-link px-2 text-muted"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://github.com/JVera95"
                  className="nav-link px-2 text-muted"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://twitter.com/JVera_95"
                  className="nav-link px-2 text-muted"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li class="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-up-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
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
