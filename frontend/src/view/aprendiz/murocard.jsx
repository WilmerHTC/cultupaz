import "../../assets/css/gestores.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import CrearTarea from "./Muro.jsx"
import axios from "axios";
import moment from "moment";
import "moment/locale/es"; // Importa el idioma español de moment
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
            <div className="container-psico pt-5">
              <h3 className="titulo101 pt-5">Muro virtual</h3>
              <hr />
              <figcaption className='blockquote-footer py-3'><cite title="Source Title"> Nuestras palabras construyen puentes de diálogo entre nosotros,
            <br></br>¡Expresa libremente tus ideas!</cite></figcaption>
            </div>
          </div>
        </center>
      </div>
      <div className="d-flex justify-content-center m-2">
        <CrearTarea />
      </div>

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
                      <div class="btn-group dropstart">
                      <i class="bi bi-three-dots-vertical mt-3" data-bs-toggle="dropdown" aria-expanded="false"></i>
                      
                      {/* <button type="button" class="btn btn-secondary dropdown-toggle" >
                        Dropstart
                      </button> */}
                      <ul class="dropdown-menu text-center">
                        <li><Link class="dropdown-item" to={"#"}>Eliminar</Link></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><Link class="dropdown-item" to={"#"}>Editar</Link></li>
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
                ))}
            </div>
          </div>
        </section>

    </div>
  );
}

export default MuroAprendiz;
