import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
                  The Last of Us Part II es un videojuego de terror y de acción y aventuras de 2020 desarrollado por Naughty Dog y publicado por Sony.
                  </p>
                  <p>
                    <a
                      class="btn btn-secondary"
                      href="https://www.naughtydog.com/blog/the_last_of_us_part_ii"
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
                  Marvel's Spider-Man: Miles Morales es un videojuego de acción y aventuras desarrollado por Insomniac Games y publicado por Sony Interactive Entertainment.
                  </p>
                  <p>
                    <a
                      class="btn btn-secondary"
                      href="https://www.playstation.com/es-es/games/marvels-spider-man-miles-morales/"
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
                  Days Gone es un videojuego de terror y acción-aventura, desarrollado por el estudio SIE Bend Studio y publicado por Sony Interactive Entertainment.
                  </p>
                  <p>
                    <a
                      class="btn btn-secondary"
                      href="https://www.bendstudio.com/game/days-gone"
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
