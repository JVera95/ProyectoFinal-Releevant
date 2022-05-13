import "./Profile.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import GameVideo from "../../videos/gamevideo.mp4";
import VideoBackground from "../../components/VideoBackground/VideoBackground";

export default function Profile() {
  const [user, setUser] = useState(null);
  const { _id } = useParams();

  console.log({ user });

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`http://localhost:8080/profile/${_id}`);
      const json = await res.json();
      setUser(json);
    }
    fetchUser();
  }, [_id]);

  if (!user) {
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
      <VideoBackground video={GameVideo} />
      <div className="container-profile bg-dark">
        {user?.map((user) => (
          <>
            <p>{user.fullname}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <input type="file" />
          </>
        ))}
      </div>
    </>
  );
}
