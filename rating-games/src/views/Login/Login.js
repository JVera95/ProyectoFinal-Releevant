import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar";
import Powerslap from "../../videos/indexvideo720.mp4";
import VideoBackground from "../../components/VideoBackground/VideoBackground";

export default function Login() {
  const { setAuth } = useAuthContext();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  async function fetchApi(user) {
    let response = await fetch("http://localhost:8080/login", {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });
    let json = await response.json();
    window.localStorage.setItem("loggedIn", JSON.stringify(json));
    console.log(json);
    setAuth(json);
  }

  function handleInputs(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchApi(user);
    setUser({
      email: "",
      password: "",
    });
    navigate("/");
  }

  return (
    <>
      <Navbar />
      <VideoBackground video={Powerslap} />
      <div className="containerlogin">
        <div className="title">Inicio de Sesión</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Contraseña</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Iniciar Sesión" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
