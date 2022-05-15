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
      {user?.map((user) => (
    <>
  <div className="grid-7 element-animation">
    <div className="card bg-dark">
      <img src="https://www.citypng.com/public/uploads/small/11639594342hjraqgbufi3xlb66lt30fz1pwfcydxkjqbynfqdpvufz41ysjtngiet4dyrywgqqqqu56w5nozgrhyecs4ixrlllkl150ogbiid1.png" alt="profile-pic" className="profile"/>
      <h1 className="titleprofile">{user.fullname}</h1>
      <p className="content">{user.username}</p>
      <p className="content">{user.email}</p>
      <hr/>
      <button className="buttonprofile" data-toggle="modal" data-target=".bd-example-modal-lg"> Editar</button>
      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content bg-dark p-4">
          <h3 className="titleprofile">Edita tus datos</h3>
        <div className="content">
          <form>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Nombre</span>
                <input
                  type="text"
                  placeholder="Introduce tu nombre"
                  name="fullname"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Usuario</span>
                <input
                  type="text"
                  placeholder="Introduce un nombre de usuario"
                  name="username"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="email"
                  placeholder="Introduce un email"
                  name="email"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Contraseña</span>
                <input
                  type="password"
                  placeholder="Introduce una contraseña"
                  name="password"
                  required
                />
              </div>
            </div>
            <button className="buttonprofile2" type="submit"> Enviar</button>
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