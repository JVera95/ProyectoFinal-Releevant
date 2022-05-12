import { Link } from "react-router-dom";
import Powerslap from "../videos/indexvideo720.mp4";
import VideoBackground from "../components/VideoBackground/VideoBackground";

export default function Missing() {
  return (
    <>
      <VideoBackground video={Powerslap} />
      <div className="containerlogin">
        <h2>Oops!</h2>
        <h3>Aquí no hay nada que ver :S</h3>
        <Link to="/" className="btn btn-secondary">
          Volver
        </Link>
      </div>
    </>
  );
}
