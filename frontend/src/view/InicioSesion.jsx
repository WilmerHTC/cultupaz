import Logo from "../assets/img/Logocolor.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import fondo from "../assets/img/emprendimiento.png";
import axios from "axios";
import Swal from "sweetalert2";

function InicioSesion() {
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [passw, setPassw] = useState("");

  const iniciarSesion = async () => {
    try {
      const resul = await axios.post("http://localhost:7000/loginUsuarios", {
        correo: correo,
        passw: passw,
      });

      if (resul.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Inicio de Sesión Correcto",
          text: resul.data.messagge,
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          localStorage.setItem("idUsuario", resul.data.idUsuario);
          localStorage.setItem("nameUsuario", resul.data.nameUsuario);
          console.log(resul.data);

          localStorage.setItem("logueado",true)
          if (resul.data.rol === 1) {
            navigate("/aprendiz");
            localStorage.setItem("usuario","aprendiz")
          } else if (resul.data.rol === 2) {
            navigate("/gestor");
            localStorage.setItem("usuario","gestor")
          } else if (resul.data.rol === 3) {
            navigate("/admin");
            localStorage.setItem("usuario","admin")
          }
        });
      }
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          icon: "warning",
          text: error.response.data,
        });
      }
    }
  };

  return (
    <div>
      <img src={fondo} className="fondo " alt="fondo"></img>
      <div className="container ">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-7 col-lg-5 col-xl-4 p-cont bg-cont py-3 border-5-secondary rounded-2">
            <img
              src={Logo}
              className=" d-flex w-25 h-25 text-center justify-content-center align-items-center m-auto"
              alt="logo"
            ></img>
            <form className="p-5">
              <h2 className="text-center bg-text fw-bold text-light mt-0">
                Inicia Sesión
              </h2>
              <div className="form-outline mb-4 ">
                <label className="form-label link text-light" for="correo">
                  Correo electroníco
                </label>
                <input
                  className="form-control form-control-lg"
                  value={correo}
                  onChange={(ev) => setCorreo(ev.target.value)}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label link text-light" for="passw">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  value={passw}
                  onChange={(ev) => setPassw(ev.target.value)}
                />
              </div>
              <div className="d-flex justify-content-center mt-3 text-light">
                <button
                  type="button"
                  onClick={iniciarSesion}
                  className=" btn-login p-1 w-100 h-50 fw-bold"
                >
                  Iniciar sesión
                </button>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <Link to="/" className="link text-light">
                  Volver al menú principal{" "}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InicioSesion;
