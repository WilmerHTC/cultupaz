import "../../assets/css/gestores.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Formulariogestor from '../GestorPaz/formulariogestor'

function Eventos() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [book, setBook] = useState({
    tema_evento: '',
    descripcion_evento: '',
    fecha_evento: ''
  });

  return (
    <div>
      <div className="container pt-5">
        <center>
          <div>
            <div className="container-psico pt-5">
              <h3 className="titulo101 pt-5">Gestores de paz</h3>
              <hr />
              <figcaption className='blockquote-footer py-1'><cite title="Source Title">Fomenta la conservación y respeto a toda forma de vida en el entorno que nos desenvolvemos,asegura las condiciones de justicia y equidad.</cite></figcaption>
              <p>¡Agenda/Crea Un Nuevo Evento!</p>
            </div>
          </div>
        </center>
      </div>
      <center>
        <Formulariogestor className='botonmodal text-center' book={book} setBook={setBook} />
      </center>
    </div>
  );
}

export default Eventos;
