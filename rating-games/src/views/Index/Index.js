import "./Index.css";
import { Link } from "react-router-dom";
import Powerslap from "../../videos/indexvideo720.mp4";

export default function Index() {
  return (
    <>
      <video
        className="videoInicio"
        id="video-inicio"
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "40vh",
          minHeight: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      >
        <source src={Powerslap} type="video/mp4" />
      </video>
      <div className="bounce choose">
        <span className="fa-angle-double-down:before font-monospace fs-1 text-white">
          Escoge tu plataforma
        </span>
      </div>
      <div className="d-flex justify-content-around">
        <div className="animation">
          <div className="frame">
            <Link to="/ps">
              <img
                src="https://www.pngkey.com/png/full/7-74293_la-siguiente-playstation-playstation-4-logo-png.png"
                alt="playstationlogo"
                className="playlogo"
              />
            </Link>
          </div>
        </div>
        <div className="animation">
          <div className="frame">
            <Link to="/xbox">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1024px-Xbox_one_logo.svg.png"
                alt="xboxlogo"
                className="xboxlogo"
              />
            </Link>
          </div>
        </div>
        <div className="animation">
          <div className="frame">
            <Link to="/nint">
              <img
                src="https://www.seekpng.com/png/full/235-2359169_logo-nintendo-e3-2018-nintendo-switch-discord-emoji.png"
                alt="nintendologo"
                className="nintlogo"
              />
            </Link>
          </div>
        </div>
        <div className="animation">
          <div className="frame">
            <Link to="/pc">
              <img
                src="https://www.mrgeek.net/img/platforms/pc.png"
                alt="pclogo"
                className="pclogo"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
