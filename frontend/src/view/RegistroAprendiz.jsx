import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import fondo from "../assets/img/emprendimiento.png";
import axios from "axios";
import Swal from "sweetalert2";

function RegistroUser() {
  const navigate = useNavigate();

  const currentDate = new Date();
  const minDate = new Date(
    currentDate.getFullYear() - 14,
    currentDate.getMonth(),
    currentDate.getDate()
  );

  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ficha, setFicha] = useState("");
  const [genero, setGenero] = useState("");
  const [fecha, setFecha] = useState("");
  const [tipo, setTipo] = useState("");
  const [numDocumento, setNumDocumento] = useState("");
  const [foto, setImagen] = useState(null);
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirPassword, setConfirPassword] = useState("");
 

  const handleImageChange = (ev) => {
    setImagen(ev.target.files[0]);
  };
  const resgistrarAprendiz = async () => {
    if (
      nombres === "" ||
      apellidos === "" ||
      telefono === "" ||
      ficha === "" ||
      genero === "" ||
      fecha === "" ||
      tipo === "" ||
      numDocumento === "" ||
      usuario === "" ||
      email === "" ||
      password === "" ||
      confirPassword === ""
    ) {
      Swal.fire({
        icon: "error",
        text: "Todos los campos son requeridos",
      });
    } else {

        try {
          const formData = new FormData();
          formData.append("nombres", nombres);
          formData.append("apellidos", apellidos);
          formData.append("telefono", telefono);
          formData.append("ficha", ficha);
          formData.append("genero", genero);
          formData.append("fechaNacimiento", fecha);
          formData.append("tipoDocumento", tipo);
          formData.append("numeroDocumento", numDocumento);
          formData.append("foto", foto);
          formData.append("usuario", usuario);
          formData.append("correo", email);
          formData.append("passw", password);
          formData.append("confirPassw", confirPassword);
          formData.append("idTipo", 1);
          formData.append("estadoUsuario", 1);
          const loanding = Swal.fire({
            title: "Su resgitro esta en proceso",
            text: "Por favor espera un momento...",
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => {
              Swal.showLoading();
            },
          });

          var resul = await axios.post(
            "http://localhost:7000/registroUsuarios", formData
            // {
            //   nombres: nombres,
            //   apellidos: apellidos,
            //   telefono: telefono,
            //   ficha: ficha,
            //   genero: genero,
            //   fechaNacimiento: fecha,
            //   tipoDocumento: tipo,
            //   numeroDocumento: numDocumento,
            //   usuario: usuario,
            //   correo: email,
            //   passw: password,
            //   confirPassw: confirPassword,
            //   idTipo: 1,
            //   estadoUsuario: 1,
            // }
          );
          loanding.close();
          if (resul.status === 200) {
            Swal.fire({
              icon: "success",
              title: "",
              text: resul.data,
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              navigate("/login");
            });
          }
        } catch (error) {
          if (error.response.status === 400) {
            Swal.fire({
              icon: "error",
              text: error.response.data,
            });
          }
        }
    }
  };

  return (
    <div>
      <img src={fondo} className="fondo " alt="fondo" />
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center  text-center">
          <div className="col-md-4 col-lg-2 col-xl-9 p-cont bg-cont  pt-2">
            <h2 className="text-light">Registro aprendiz</h2>
            <br></br>
            <br></br>

            <div className="row g-5 justify-content-center  p-3 ">
              <div className="col-md-7 col-lg-10 mt-2">
                <form className="needs-validation text-light">
                  <div className="row g-3 ">
                    <div className="col-sm-4 mb-3">
                      <label className="form-label link">Nombres</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        value={nombres}
                        onChange={(ev) => setNombres(ev.target.value)}
                      />
                    </div>
                    <div className="col-sm-4 mb-3">
                      <label className="form-label link" for="">
                        Apellidos
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        value={apellidos}
                        onChange={(ev) => setApellidos(ev.target.value)}
                      />
                    </div>

                    <div className="col-sm-4 mb-3">
                      <label className="form-label link" for="">
                      Teléfono
                      </label>
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        value={telefono}
                        onChange={(ev) => setTelefono(ev.target.value)}
                      />
                    </div>
                    <div className="col-sm-4 mb-3">
                      <label className="form-label link" for="email">
                        Ficha programa formación
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        value={ficha}
                        onChange={(ev) => setFicha(ev.target.value)}
                      />
                    </div>
                    <div className="col-sm-4 mb-3">
                      <label className="form-label link" for="">
                      Género
                      </label>
                      <select
                        value={genero}
                        onChange={(ev) => setGenero(ev.target.value)}
                        className="form-control form-control-lg"
                      >
                        <option value="" className="text-center">
                          Seleccióne...
                        </option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div className="col-sm-4 mb-3">
                      <label className="form-label link" for="">
                        Fecha nacimiento
                      </label>
                      <input
                        type="date"
                        className="form-control form-control-lg text-center"
                        value={fecha}
                        onChange={(ev) => setFecha(ev.target.value)}
                        max={minDate.toISOString().split("T")[0]} // Establecer fecha mínima
                      />
                    </div>
                    <div className="col-sm-4 mb-3">
                      <label className="form-label link" for="">
                        Tipo documento
                      </label>
                      <select
                        name="tipoDocumento"
                        id="tipoDoc"
                        className="form-control form-control-lg"
                        value={tipo}
                        onChange={(ev) => setTipo(ev.target.value)}
                      >
                        <option value="" className="text-center">
                          Seleccióne...
                        </option>
                        <option value="TI" className="text-center">
                          Tarjeta de identidad
                        </option>
                        <option value="CC" className="text-center">
                          Cédula de ciudadania
                        </option>
                        <option value="CE" className="text-center">
                        Cédula  de extrangeria
                        </option>
                      </select>
                    </div>
                    <div className="col-sm-4 mb-3">
                      <label className="form-label link" for="">
                        Número documento
                      </label>
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        value={numDocumento}
                        onChange={(ev) => setNumDocumento(ev.target.value)}
                      />
                    </div>
                    <div className="col-sm-4 mb-3">
                      <label className="form-label link" for="">
                        Foto
                      </label>
                      <input
                       type="file"
                       className="form-control form-control-lg"
                       accept="image/jpeg, image/png"
                       onChange={handleImageChange}
                      />
                    </div>
                    <div className="col-sm-4 mb-3">
                      <label className="form-label link" for="">
                        Nombre de usuario
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        value={usuario}
                        onChange={(ev) => setUsuario(ev.target.value)}
                      />
                    </div>
                    <div className="col-sm-4 mb-3">
                      <label className="form-label link" for="">
                        Correo electroníco
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                      />
                    </div>
                    <div className="col-sm-4 mb-3">
                      <label className="form-label link" for="">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                      />
                    </div>
                    <div className="col-sm-4 mb-3">
                      <label className="form-label link" for="confPassw">
                        Confirmar contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        value={confirPassword}
                        onChange={(ev) => setConfirPassword(ev.target.value)}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-1">
                    <button
                      type="button"
                      value="regist"
                      className=" btn-reg p-2"
                      onClick={resgistrarAprendiz}
                    >
                      Registrarse
                    </button>
                  </div>
                  <div className="d-flex justify-content-center mt-1 text-light">
                    <Link to="/login" className="link text-light">
                      Ya tengo cuenta
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroUser;
