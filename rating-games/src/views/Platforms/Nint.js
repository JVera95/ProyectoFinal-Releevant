import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
                src="https://pressover.news/wp-content/uploads/2021/10/featured-metroid-dread-artwork-01.jpg"
                alt="metroid"
                style={{
                  objectFit: "cover",
                }}
              />
              <div class="container">
                <div class="carousel-caption text-start">
                  <h1>Metroid Dread</h1>
                  <p>
                    Metroid Dread es un videojuego de acción-aventura de 2021 de
                    la serie Metroid, desarrollado por MercurySteam en
                    colaboración con la filial Nintendo EPD y publicado por
                    Nintendo para la consola Nintendo Switch.
                  </p>
                  <p>
                    <a
                      class="btn btn-secondary"
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
            <div class="carousel-item">
              <img
                src="https://sm.ign.com/ign_es/screenshot/default/2022030310455900-336db1da8bdc3bf38ed8609901964a6b_adf7.jpg"
                alt="kirby"
                style={{
                  objectFit: "cover",
                }}
              />
              <div class="container">
                <div class="carousel-caption text-start">
                  <h1>Kirby and the Forgotten Land</h1>
                  <p>
                    Kirby y la tierra olvidada, titulado en inglés como Kirby
                    and the Forgotten Land, es un videojuego de plataformas en
                    3D de la saga Kirby, desarrollado por HAL Laboratory y
                    publicado por Nintendo para la videoconsola Nintendo Switch.
                  </p>
                  <p>
                    <a
                      class="btn btn-secondary"
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
            <div class="carousel-item">
              <img
                src="https://i.ytimg.com/vi/a5ZV1T9E0is/maxresdefault.jpg"
                alt="monsterh"
                style={{
                  objectFit: "cover",
                }}
              />
              <div class="container">
                <div class="carousel-caption text-start">
                  <h1>Monster Hunter Rise</h1>
                  <p>
                    Monster Hunter Rise es un juego de rol de acción
                    desarrollado y publicado por Capcom para Nintendo Switch. Es
                    la entrega más reciente de la saga portátil , perteneciendo
                    a la quinta generación de la saga.
                  </p>
                  <p>
                    <a
                      class="btn btn-secondary"
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

        <footer className="container">
          <p className="float-end">
            <a href="#">Volver arriba</a>
          </p>
          <p>2021 - 2022 Releevant, Vera.</p>
        </footer>
      </main>
    </>
  );
}
