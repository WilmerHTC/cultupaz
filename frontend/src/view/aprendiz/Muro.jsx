import "../../assets/css/gestores.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import CrearTarea from "./Muro.jsx"
import axios from "axios";
import moment from "moment";
import "moment/locale/es"; // Importa el idioma español de moment
import CrearPublicacion from "./components/crearPublicacion";
import MisPublicaciones from "./components/verMisPublicaciones";
moment.locale("es");
function MuroAprendiz() {

  const [verMuro, setMuro] = useState([]);

  useEffect(() => {
    treaerEventos();
  }, []);

  const treaerEventos = async () => {
    try {
      const { data } = await axios.get("http://localhost:7000/verPublicaciones");
      setMuro(data);
    } catch (error) {
      console.log(error);
    }
  };
 
  const [fechaActual, setFechaActual] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setFechaActual(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatFechaCreacion = (fechaCreacion) => {
    const fechaActual = moment();
    const fecha = moment(fechaCreacion);
  
    // Verifica si la fecha de creación es posterior a la fecha actual
    if (fecha.isAfter(fechaActual)) {
      return "Fecha inválida"; // O cualquier otro mensaje de error que desees mostrar
    }
  
    // Calcula la diferencia en segundos
    const diffSeconds = Math.abs(fechaActual.diff(fecha, "seconds"));
  
    if (diffSeconds < 60) {
      // Si la diferencia es menor a un minuto
      return `Hace un momento`;
    } else {
      // Calcula la diferencia en minutos
      const diffMinutes = Math.abs(fechaActual.diff(fecha, "minutes"));
  
      if (diffMinutes < 60) {
        // Si la diferencia es menor a una hora
        return `Hace ${diffMinutes} minuto${diffMinutes !== 1 ? "s" : ""}`;
      } else {
        // Calcula la diferencia en horas
        const diffHours = Math.abs(fechaActual.diff(fecha, "hours"));
  
        if (diffHours < 24) {
          // Si la diferencia es menor a un día
          return `Hace ${diffHours} hora${diffHours !== 1 ? "s" : ""}`;
        } else if (diffHours < 48) {
          // Si la diferencia es de un día
          return "Hace 1 día";
        } else {
          // Calcula la diferencia en días
          const diffDays = Math.abs(fechaActual.diff(fecha, "days"));
  
          if (diffDays <= 5) {
            // Si la diferencia es menor o igual a 5 días
            return `Hace ${diffDays} día${diffDays !== 1 ? "s" : ""}`;
          } else {
            // Si la diferencia es mayor a 5 días
            return `Creado el ${fecha.format("D [de] MMMM [del] YYYY")}`;
          }
        }
      }
    }
  };

 
  

  return (
    <div>
      <div className="container pt-5">
        <center>
          <div>
            <div className="container-psico pt-3">
              <h3 className="titulo101 pt-5">Muro virtual</h3>
              <hr />
              <figcaption className='blockquote-footer mt-2'><cite title="Source Title"> Nuestras palabras construyen puentes de diálogo entre nosotros,
            <br></br>¡Expresa libremente tus ideas!</cite></figcaption>
            </div>
          </div>
        </center>
      </div>
      <section className="tabs-info">
          <div className="container-fluid">
              <div className="d-flex justify-content-center">
                <ul className="nav nav-pills " id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                      >
                        
                      Publicaciones
                    </button>
                  </li>
                  <CrearPublicacion/>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Mis publicaiones
                    </button>
                  </li>             
                </ul>
              </div>

              <div className="tab-content " id="myTabContent">
                <div
                  className="tab-pane fade show active  "
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="home-tab">

                  <div className="row">
                  <section id="events" className="events">
                    <div className="container" data-aos="fade-up">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-2">
                        {verMuro
                            .sort((a, b) => new Date(b.fecha_creacion) - new Date(a.fecha_creacion))
                            .map((Muro, idMuro) => (
                            <div className="col-lg-4" key={idMuro}>
                                <div className="card p-1" >
                                <div className="card-body">
                                <div className="d-flex justify-content-between">
                                <h5 className="card-title">{Muro.titulo}</h5>
                                
                                </div>
                                
                                
                                <p className="card-text">{Muro.descripcion}</p>
                                <h6 className="card-subtitle mb-2 text-muted text-sice ">
                                    {formatFechaCreacion(Muro.fecha_creacion, fechaActual)}
                                </h6>
                                </div>
                            </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    </section>
                  
                  </div>
                </div>
                <div
                  className="tab-pane fade "
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                 <div className="row">
                    
                    <section className="section">
                      <div className="row">
                       <MisPublicaciones/>
                      </div>
                    </section>
                  
                  </div>
                 
                </div>
              </div>
            </div>
      
        </section>
       

    </div>
  );
}

export default MuroAprendiz;