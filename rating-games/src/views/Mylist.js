import Navbar from "../components/Navbar";
import GameVideo from "../videos/gamevideo.mp4";
import VideoBackground from "../components/VideoBackground/VideoBackground";

export default function MyList() {
  return (
    <>
      <Navbar />
      <VideoBackground video={GameVideo} />
      <h1>My List view!!!</h1>
    </>
  );
}
