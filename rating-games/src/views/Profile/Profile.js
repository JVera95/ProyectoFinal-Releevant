import "./Profile.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar";
import GameVideo from "../../videos/gamevideo.mp4";
import VideoBackground from "../../components/VideoBackground/VideoBackground";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default function Profile() {
  const { auth, setAuth } = useAuthContext();
  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState([]);
  const { _id } = useParams();

  // console.log({ user });

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`http://localhost:8080/profile/${_id}`);
      const json = await res.json();
      setUser(json);
    }
    fetchUser();
  }, [_id]);

  function handleInputs(e) {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(newUser);
    let res = await fetch(`http://localhost:8080/editprofile/${_id}`, {
      mode: "cors",
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname: newUser.fullname,
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
      }),
    });
    let json = await res.json();

    setUser(json);

    Swal.fire({
      title: "Hecho!",
      text: "Perfil modificado con exito!",
      icon: "success",
      confirmButtonText: "Ok",
    });
  }

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
      {user?.map((user) => (
        <>
          <div className="grid-7 element-animation">
            <div className="card bg-dark">
              <img
                src="https://www.citypng.com/public/uploads/small/11639594342hjraqgbufi3xlb66lt30fz1pwfcydxkjqbynfqdpvufz41ysjtngiet4dyrywgqqqqu56w5nozgrhyecs4ixrlllkl150ogbiid1.png"
                alt="profile-pic"
                className="profile"
              />
              <h1 className="titleprofile">{user.fullname}</h1>
              <p className="content">{user.username}</p>
              <p className="content">{user.email}</p>
              <hr />
              <button
                className="buttonprofile"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                {" "}
                Editar
              </button>
              <div
                className="modal fade bd-example-modal-lg"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content bg-dark p-4">
                    <h3 className="titleprofile">Edita tus datos</h3>
                    <div className="content">
                      <form onSubmit={handleSubmit}>
                        <div className="user-details">
                          <div className="input-box">
                            <span className="details">Nombre</span>
                            <input
                              type="text"
                              placeholder="Introduce tu nombre"
                              name="fullname"
                              onChange={handleInputs}
                              required
                            />
                          </div>
                          <div className="input-box">
                            <span className="details">Usuario</span>
                            <input
                              type="text"
                              placeholder="Introduce un nombre de usuario"
                              name="username"
                              onChange={handleInputs}
                              required
                            />
                          </div>
                          <div className="input-box">
                            <span className="details">Email</span>
                            <input
                              type="email"
                              placeholder="Introduce un email"
                              name="email"
                              onChange={handleInputs}
                              required
                            />
                          </div>
                          <div className="input-box">
                            <span className="details">Contraseña</span>
                            <input
                              type="password"
                              placeholder="Introduce una contraseña"
                              name="password"
                              onChange={handleInputs}
                              required
                            />
                          </div>
                        </div>
                        <button className="buttonprofile2" type="submit">
                          {" "}
                          Enviar
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
