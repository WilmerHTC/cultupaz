import "../../assets/css/gestores.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import CrearEvento from "./CrearEvento";
import axios from "axios";
// import Formulariogestor from '../GestorPaz/formulariogestor'

function Eventos() {

  const [verEventos, setEventos] = useState([]);

  useEffect(() => {
    treaerEventos();
  }, []);

  const treaerEventos = async () => {
    try {
     
      const { data } = await axios.get(`http://localhost:7000/mostrarMisEventos/${localStorage.getItem("idUsuario")}`);
      setEventos(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
  
  // Filtrar los eventos que aún no han ocurrido
  const eventosFuturos = verEventos.filter((evento) => {
    const fecha = new Date(evento.fecha_evento);
    return fecha >= new Date();
  });

  return (
    <div>
      <div className="container pt-5">
        <center>
          <div>
            <div className="container-psico pt-5">
              <h3 className="titulo101 pt-5">Gestores de paz</h3>
              <hr />
              <figcaption className='blockquote-footer py-3'><cite title="Source Title">Fomenta la conservación y respeto a toda forma de vida en el entorno que nos desenvolvemos,asegura las condiciones de justicia y equidad.</cite></figcaption>
            </div>
          </div>
        </center>
      </div>
      <div className="d-flex justify-content-center m-2">
        <CrearEvento />
      </div>

      <section id="events" className="events">
        <div className="container" data-aos="fade-up">

          <div className="row col-lg-12" >
            {eventosFuturos.map((eventos, idEvento) => {
              const fecha = new Date(eventos.fecha_evento);

              const year = fecha.getFullYear();
              const month = fecha.getMonth() + 1;
              const day = fecha.getDate();

              const formattedMonth = String(month).padStart(2, '0');
              const formattedDay = String(day).padStart(2, '0');

              const formattedFecha = `${year}-${formattedMonth}-${formattedDay}`;


              return <div className="col-xl-4 d-flex flex-column align-items-stretch" key={idEvento}>

                <div className="events">
                  <div className="events-body">
                    <p className="events-title h5" >Tema: {eventos.tema_evento}</p>
                    <p className="fst-italic text-center">Fecha: {formattedFecha}</p>
                    <p className="events-text text-center">{eventos.descripcion_evento}</p>
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

export default Eventos;