import React, { useState, useEffect } from 'react';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";
import '../../assets/css/stilosModal.css';

function Evento() {

  const [verEventos, setEventos] = useState([]);

  const eventosFuturos = verEventos.filter((evento) => {
    const fecha = new Date(evento.fecha_evento);
    return fecha >= new Date();
  });
  useEffect(() => {
    treaerEventos();
  }, []);

  const treaerEventos = async () => {
    try {
      const { data } = await axios.get("http://localhost:7000/mostrarEventos",);
      setEventos(data);
    } catch (error) {
      console.log(error);
    }
  };
  const idUsuario = localStorage.getItem("idUsuario");

  const [book, setBook] = useState({
    descripcion_sugerencia_evento: '',
    idUsuario: idUsuario,
   
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:7000/crearAsistencia', book)
      .then((res) => {
        console.log(res);
        setBook({
          descripcion_sugerencia_evento: '',
          idUsuario: idUsuario,
         
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
    }).then((result) => {
      if (result.isConfirmed) {
        handleClose();
      }
    }
    );
  };

  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="colorevento colorheader">
          <Modal.Title className="colorevento ">Registro de asistencia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <label className="formtext py-2 px-1">
              ¿Qué tema que te gustaría que abordemos en futuros eventos?
            </label>
            <textarea
              type="text"
              className="form-control formtext"
              placeholder="De Qué Quieres Hablar"
              name="descripcion_sugerencia_evento"
              value={book.descripcion_sugerencia_evento}
              onChange={handleChange}
              rows={6}
              cols={40}

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
