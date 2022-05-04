import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";

export default function Login() {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

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
    navigate(from, { replace: true });
  }

  return (
    <>
      <Navbar />
      <h1>Sign In</h1>
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
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Stay signed in
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </>
  );
}
