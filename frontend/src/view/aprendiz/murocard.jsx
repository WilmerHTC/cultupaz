import "../../assets/css/gestores.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import CrearTarea from "./Muro.jsx"
import axios from "axios";

function MuroAprendiz() {

  const [verMuro, setMuro] = useState([]);

  useEffect(() => {
    treaerEventos();
  }, []);

  const treaerEventos = async () => {
    try {
      const { data } = await axios.get("http://localhost:7000/aprendiz/tarea");
      setMuro(data);
    } catch (error) {
      console.log(error);
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

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {verMuro.map((Muro, idMuro) => (
              <div className="col" key={idMuro}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{Muro.titulo}</h5>
                    <p className="card-text">{Muro.descripcion}</p>
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
