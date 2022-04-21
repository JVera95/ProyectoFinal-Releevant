import "./Index.css";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <div className="bounce choose">
        <span className="fa-angle-double-down:before font-monospace fs-1">
          Escoge tu plataforma
        </span>
      </div>
      <div className="d-flex justify-content-around">
        <div className="animation">
          <div className="frame">
            <Link to="/ps">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/1280px-Playstation_logo_colour.svg.png"
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
                src="https://play-lh.googleusercontent.com/SbG9KOoZnnVB_hxvY5MfD6F4R8YJHGk4BKhp_-9PWdCuEPCXyPAaVdi8fJ1oSLMCle4"
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
