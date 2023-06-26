import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function AdminRegistro(){
  const navigate = useNavigate();

  const currentDate = new Date();
  const minDate = new Date(
    currentDate.getFullYear() - 18,
    currentDate.getMonth(),
    currentDate.getDate()
  );

  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [genero, setGenero] = useState("");
  const [fecha, setFecha] = useState("");
  const [tipo, setTipo] = useState("");
  const [numDocumento, setNumDocumento] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const resgistrarGestor = async () => {
    if (
      nombres === "" ||
      apellidos === "" ||
      telefono === "" ||
      genero === "" ||
      fecha === "" ||
      tipo === "" ||
      numDocumento === "" ||
      email === "" ||
      password === "" 
    
    ) {
      Swal.fire({
        icon: "error",

        text: "Todos los campos son requeridos",
      });
    } else {
      try {
        var resul = await axios.post("http://localhost:7000/registroUsuarios", {
          nombres: nombres,
          apellidos: apellidos,
          telefono: telefono,
          genero: genero,
          fechaNacimiento: fecha,
          tipoDocumento: tipo,
          numeroDocumento: numDocumento,
          correo: email,
          passw: password,
          confirPassw: password,
          idTipo: 3,
          estadoUsuario: 1,
        });

        if (resul.status === 200) {
          Swal.fire({
            icon: "success",
            title: "",
            text: resul.data,
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            navigate("/admin");
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
   return(
    <div>
      <main id="main" class="main">

    <div class="pagetitle">
      <h1>Registro</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">inicio</a></li>
          <li class="breadcrumb-item active">Registro</li>
        </ol>
      </nav>
    </div>

    <section class="section">
      <div class="row">
        <div class="col-lg-12">

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Registro admin</h5>
              <form className="needs-validation text-light">
                  <div className="row g-3 ">
                    <div className="col-sm-4 mb-3">
                      <label className="form-label link">Nombres</label>
                      <input
                        type="text"
                        className="form-control form-control"
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
                        className="form-control form-control"
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
                        className="form-control form-control"
                        value={telefono}
                        onChange={(ev) => setTelefono(ev.target.value)}
                      />
                    </div>
                    <div className="col-sm-4 mb-3">
                      <label className="form-label link" for="">
                      Género
                      </label>
                      <select
                        className="form-control form-control"
                        value={genero}
                        onChange={(ev) => setGenero(ev.target.value)}
                      >
                        <option value="" className="text-center">
                          Seleccióne...
                        </option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino"> Femenino</option>
                        <option value="otro"> Otro</option>
                      </select>
                    </div>

                    <div className="col-sm-4 mb-3">
                      <label className="form-label link" for="">
                        Fecha nacimiento
                      </label>
                      <input
                        type="date"
                        className="form-control form-control text-center"
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
                        className="form-control form-control"
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
                        Cédula  de ciudadania
                        </option>
                      </select>
                    </div>
                    <div className="col-sm-4 mb-3">
                      <label className="form-label link" for="">
                        Número identificación
                      </label>
                      <input
                        type="number"
                        className="form-control form-control"
                        value={numDocumento}
                        onChange={(ev) => setNumDocumento(ev.target.value)}
                      />
                    </div>

                    <div className="col-sm-4 mb-3">
                      <label className="form-label link" for="">
                        E-mail
                      </label>
                      <input
                        type="text"
                        className="form-control form-control"
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                      />
                    </div>
                    <div className=" col-sm-4 mb-3">
                      <label className=" form-label link" for="">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control form-control"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                      />
                    </div>

                    
                  </div>
                  <div className="d-flex justify-content-center mt-2 text-center">
                    <button
                      type="button"
                      className=" btn-reg"
                      onClick={resgistrarGestor}
                    >
                      Registrar
                    </button>
                  </div>
                </form>
           

            </div>
          </div>

        </div>
      </div>
    </section>

  </main>

    </div>
   ) 

}

export default AdminRegistro;