import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Powerslap from "../../videos/indexvideo720.mp4";

export default function Login() {
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
    console.log(json);
    window.localStorage.setItem("loggedIn", JSON.stringify(json));
    setUser(json);
  }

  async function login(user) {
    await fetchApi(user);
    if (user) {
      setUser(user);
      setErrorMessage("");
    } else {
      setErrorMessage("Error al introducir las credenciales!");
    }
  }

  function handleInputs(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(user);
    setUser({
      email: "",
      password: "",
    });
    navigate("/");
  }

  return (
    <>
      <Navbar />
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
      <div class="container">
        <div class="title">Login</div>
        <div class="content">
          <form onSubmit={handleSubmit}>
            <div class="user-details">
              <div class="input-box">
                <span class="details">Email</span>
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
              <div class="input-box">
                <span class="details">Password</span>
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
            <div class="button">
              <input type="submit" value="Sign In" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

{
  /* <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            type="text"
            id="email"
            name="email"
            autoComplete="off"
            onChange={handleInputs}
            value={user.email}
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            onChange={handleInputs}
            value={user.password}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form> */
}
