import "./Login.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar";
import Powerslap from "../../videos/indexvideo720.mp4";
import VideoBackground from "../../components/VideoBackground/VideoBackground";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default function Login() {
  const { setAuth } = useAuthContext();
  const location = useLocation();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  async function fetchApi(user) {
    let response = await fetch("http://localhost:8080/login", {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // , "Authorization": window.localStorage.getItem("loggedIn")
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });
    let json = await response.json();
    if (response.status === 200) {
      window.localStorage.setItem("loggedIn", JSON.stringify(json));
      setAuth(json);
    } else {
      Swal.fire({
        title: "Error!",
        text: "Datos incorrectos.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  }

  function handleInputs(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await fetchApi(user);
    // setUser({
    //   email: "",
    //   password: "",
    // });
    navigate(from, { replace: true });

    Swal.fire({
      title: "",
      text: "Bienvenido!",
      icon: "success",
      confirmButtonText: "Ok",
    });
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
                  type="email"
                  placeholder="Introduce tu email"
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
                  placeholder="Introduce tu contraseña"
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
