import "./Index.css";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="d-flex justify-content-around">
      <div className="m-auto align-self-center">
        <Link to="/ps">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/1280px-Playstation_logo_colour.svg.png"
            alt="playstationlogo"
            className="playlogo"
          />
        </Link>
      </div>
      <div className="m-auto">
        <Link to="/xbox">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/XBOX_logo_2012.svg/1280px-XBOX_logo_2012.svg.png"
            alt="xboxlogo"
            className="xboxlogo"
          />
        </Link>
      </div>
      <div className="m-auto">
        <Link to="/nint">
          <img
            src="https://intercompras.com/images/icons/logofabricante/manufacturers_2147076517_image.png"
            alt="nintendologo"
            className="nintendologo"
          />
        </Link>
      </div>
      <div className="m-auto">
        <Link to="/pc">
          <img
            src="https://www.betaarchive.com/wiki/images/9/94/Pc-logo-png.png"
            alt="pclogo"
            className="playlogo"
          />
        </Link>
      </div>
    </div>
  );
}
