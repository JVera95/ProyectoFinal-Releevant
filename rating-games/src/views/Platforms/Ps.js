import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GameVideo from "../../videos/gamevideo.mp4";
import VideoBackground2 from "../../components/VideoBackground2/VideoBackground2";

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
      <VideoBackground2 video={GameVideo} />
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
                src="https://tec.com.pe/wp-content/uploads/2021/01/hipertextual-the-last-of-us-part-ii-nos-ofrece-breve-vistazo-su-oscura-historia-su-nuevo-trailer-2020682431-scaled-1.jpg"
                alt="tlou"
                style={{
                  objectFit: "cover",
                }}
              />
              <div class="container">
                <div class="carousel-caption text-start">
                  <h1>The Last of Us 2</h1>
                  <p>
                    The Last of Us Part II es un videojuego de terror y de
                    acción y aventuras de 2020 desarrollado por Naughty Dog y
                    publicado por Sony.
                  </p>
                  <p>
                    <a
                      class="btn btn-secondary"
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
            <div class="carousel-item">
              <img
                src="https://image.api.playstation.com/vulcan/ap/rnd/202008/1420/HcLcfeQBXd2RiQaCeWQDCIFN.jpg"
                alt="spiderman"
                style={{
                  objectFit: "cover",
                }}
              />
              <div class="container">
                <div class="carousel-caption text-start">
                  <h1>Spider-Man Miles Morales</h1>
                  <p>
                    Marvel's Spider-Man: Miles Morales es un videojuego de
                    acción y aventuras desarrollado por Insomniac Games y
                    publicado por Sony Interactive Entertainment.
                  </p>
                  <p>
                    <a
                      class="btn btn-secondary"
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
            <div class="carousel-item">
              <img
                src="https://www.pixel4k.com/wp-content/uploads/2020/02/days-gone_1581271999.jpg"
                alt="daysgone"
                style={{
                  objectFit: "cover",
                }}
              />
              <div class="container">
                <div class="carousel-caption text-start">
                  <h1>Days Gone</h1>
                  <p>
                    Days Gone es un videojuego de terror y acción-aventura,
                    desarrollado por el estudio SIE Bend Studio y publicado por
                    Sony Interactive Entertainment.
                  </p>
                  <p>
                    <a
                      class="btn btn-secondary"
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

              <h2>God of War: Ragnarök</h2>
              <p>
                God of War: Ragnarök es un próximo juego de acción y aventuras
                en desarrollo por Santa Monica Studio y que será publicado por
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
                Final Fantasy XVI es un videojuego de rol de acción que está
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
