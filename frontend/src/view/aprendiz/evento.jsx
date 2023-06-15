import React, { useState, useEffect } from 'react';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";
import '../../assets/css/stilosModal.css';

function Evento() {

  const [eventos, setEventos] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:7000/gestor/evento')
      .then(res => setEventos(res.data))
      .catch(err => console.log(err));
  }, []);

  const [book, setBook] = useState({
    descripcion_asistencia: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:7000/gestor/acompanamiento', book)
      .then((res) => {
        console.log(res);
        setBook({
          descripcion_asistencia: ''
        });
      });
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const showAlert = () => {
    Swal.fire({
      text: 'Su registro fue exitoso',
      icon: 'success',
      timer: 3000,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        handleClose();
      }
    });
  };

  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [listUpdated, setListUpdated] = useState(false);

  useEffect(() => {

  }, [listUpdated]);
  //formato de fecha

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const date = new Date(dateString);
    const currentDate = new Date();

    if (date < currentDate) {
      return null; // Si la fecha ya ha pasado, retorna null
    }

    return date.toLocaleDateString('es-ES', options);
  };



  return (
    <div>
      <div className='container-fluid mb-4 pt-5'>
        <figure className='text-center pt-5'>
          <blockquote className='blockquote pt-5'>
            <p className='titulo10'>Eventos De Paz</p>
          </blockquote>
          <figcaption className='blockquote-footer py-1'>
            <cite title="Source Title">No hay camino para la paz, la paz es el camino</cite>
          </figcaption>
        </figure>
      </div>
      <div>
        <center>
          <Button className="colorheader text-center mb-4 letter" onClick={handleShow}>
            ¡Aporta ideas para proximos eventos!
          </Button>
        </center>
      </div>
      <section id="events" className="events arreglo2">
        <div className="container" data-aos="fade-up">

          <div className="row col-lg-12" >
            {eventos.filter((evento) => formatDate(evento.fecha_evento) !== null).map((evento, index) => (
              <div key={index} className="col-xl-4 d-flex flex-column align-items-stretch">

                <div className="events">
                  <div className="events-body">
                    <p className="events-title h5">{evento.tema_evento}</p>
                    <p className="fst-italic text-center">{formatDate(evento.fecha_evento)}</p>
                    <p className="events-text">{evento.descripcion_evento}</p>


                  </div>
                </div>
              </div>
            ))}
            {/* ------------- */}
          </div>
        </div>
      </section>
      <center>
      </center>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="colorevento colorheader">
          <Modal.Title className="colorevento ">Registro de asistencia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            <textarea
              type="text"
              className="form-control"
              placeholder="De Qué Quieres Hablar"
              name="descripcion_asistencia"
              value={book.descripcion_asistencia}
              onChange={handleChange}
              rows={10}
              cols={80}

            />
            <div className="espacioboton my-3">
              <center>
                <Button variant="btn colorheader mx-1" onClick={handleClose}>
                  Cancelar
                </Button>
                <button type="submit" className="btn colorheader mx-1" onClick={showAlert}>
                  Enviar
                </button>
              </center>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Evento;
