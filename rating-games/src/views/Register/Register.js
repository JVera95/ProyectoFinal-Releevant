import "./Register.css";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Powerslap from "../../videos/indexvideo720.mp4";
import VideoBackground from "../../components/VideoBackground/VideoBackground";

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  async function fetchApi(user) {
    let response = await fetch("http://localhost:8080/newUser", {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname: user.fullname,
        username: user.username,
        email: user.email,
        password: user.password,
      }),
    });
    let json = await response.json();

    setUser(json);
  }

  function handleInputs(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchApi(user);
    setUser({
      fullname: "",
      username: "",
      email: "",
      password: "",
    });
    navigate("/login");
  }

  return (
    <>
      <Navbar />
      <VideoBackground video={Powerslap} />
      <div className="containerregister">
        <div className="title">Registration</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="fullname"
                  value={user.fullname}
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  name="username"
                  value={user.username}
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                  required
                />
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
