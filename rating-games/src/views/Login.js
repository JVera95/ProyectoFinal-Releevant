import { useState, useEffect, useRef } from "react";
import { useLoginContext } from "../contexts/LoginContext";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  const { login, errorMessage, loggin } = useLoginContext();
  const location = useLocation();
  const navigate = useNavigate();
  const userRef = useRef();

  const from = location.state?.from?.pathname || "/";

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(function () {
    return userRef.current.focus();
  }, []);

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
      <section>
        <p
          className={errorMessage ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errorMessage}
        </p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Username:</label>
          <input
            type="text"
            id="email"
            name="email"
            ref={userRef}
            autoComplete="off"
            onChange={handleInputs}
            value={user.email}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInputs}
            value={user.password}
            required
          />
          <button className="btn btn-primary mt-3">Sign In</button>
        </form>
      </section>
    </>
  );
}
