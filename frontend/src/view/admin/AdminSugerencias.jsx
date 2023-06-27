import "../../assets/css/gestores.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import "../../assets/css/slider.css"


function MuroAprendiz() {
  const [Sugerencias, setSugerencia] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  
  useEffect(() => {
    traerSugerencia();
  }, []);


  const traerSugerencia = async () => {
    try {
      const { data } = await axios.get("http://localhost:7000/verSugerencias");
      setSugerencia(data);
    } catch (error) {
      console.log(error);
    }
  };


  const eliminarPublicacion = async (id) => {
    try {
      console.log(id);
      const response = await axios.delete(`http://localhost:7000/eliminarPublicacion/${id}`);
     
      if (response.status ===200) {
        Swal.fire({
          icon: "success",
          title: "",
          text:response.data,
          confirmButtonText: "Aceptar",
          timer: 3000,
        }).then(() => {
          window.location.reload();
        });
      } else {
        Swal.fire({
          icon: "error",
          text: response.data.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    
    <div className="container pt-5">
    
      <section id="events" className="events">
        <div className="container" data-aos="fade-up">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-2 publicacion">
          {Sugerencias.map((sugerecias, idSugerencia) => {
                return <div className="col-lg-4" key={idSugerencia}>
                  <div className="card p-1">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-title">{sugerecias.descripcion}</h5>
                        <div className="btn-group dropstart">
                          <i
                            className="bi bi-three-dots-vertical mt-3"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          ></i>
                          <ul className="dropdown-menu text-center">
                            <li>
                              <Link
                                className="dropdown-item"
                                to={"#"}
                                onClick={() => eliminarPublicacion(Muro.idMuro)}
                              >
                                Eliminar
                              </Link>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to={"#"}
                                onClick={() => editarPublicacion(Muro)}
                              >
                                Editar
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p className="card-text">{Muro.descripcion}</p>
                      <h6 className="card-subtitle mb-2 text-muted text-sice ">
                        {formatFechaCreacion(Muro.fecha_creacion, fechaActual)}
                      </h6>
                    </div>
                  </div>
                </div>
              })}
          </div>
          </div>
      </section>
    </div>
  );
}

export default MuroAprendiz;