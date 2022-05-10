import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
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
                  Gears 5 es un videojuego de acción en tercera persona desarrollado por The Coalition y publicado por Xbox Game Studios para Microsoft Windows y Xbox One.
                  </p>
                  <p>
                    <a
                      class="btn btn-secondary"
                      href="https://www.gears5.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Go to Website &raquo;
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
                  Halo Infinite es un videojuego de disparos en primera persona de la franquicia de videojuegos de ciencia ficción creada por Bungie Studios y actualmente desarrollada por 343 Industries.
                  </p>
                  <p>
                    <a
                      class="btn btn-secondary"
                      href="https://www.halowaypoint.com/es-es"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Go to Website &raquo;
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
                  Sea of Thieves es un videojuego de acción-aventura en primera persona desarrollado por Rare y distribuido por Xbox Game Studios.
                  </p>
                  <p>
                    <a
                      class="btn btn-secondary"
                      href="https://www.seaofthieves.com/es"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Go to Website &raquo;
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
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>

              <h2>Heading</h2>
              <p>
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details &raquo;
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>

              <h2>Heading</h2>
              <p>
                Another exciting bit of representative placeholder content. This
                time, we've moved on to the second column.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details &raquo;
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>

              <h2>Heading</h2>
              <p>
                And lastly this, the third column of representative placeholder
                content.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details &raquo;
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
                      See more &raquo;
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

        <footer className="container">
          <p className="float-end">
            <a href="#">Back to top</a>
          </p>
          <p>2021 - 2022 Releevant, Vera.</p>
        </footer>
      </main>
    </>
  );
}
