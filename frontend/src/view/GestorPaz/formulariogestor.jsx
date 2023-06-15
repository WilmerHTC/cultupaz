import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../../assets/css/stilosModal.css';
import Swal from "sweetalert2";
import axios from 'axios';

const Formulariogestor = () => {
  const [show, setShow] = useState(false);
  const [eventos, setEventos] = useState([]);

  const [book, setBook] = useState({
    tema_evento: '',
    descripcion_evento: '',
    fecha_evento: ''
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "fecha_evento") {
      const currentDate = new Date().toISOString().split('T')[0];
      if (value < currentDate) {
        return;
      }
    }

    setBook({
      ...book,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:7000/gestor/evento", book)
      .then(res => {
        console.log(res);
        setEventos([...eventos, book]);
        showAlert();
      })
      .catch(err => {
        console.log(err);
        showAlertError();
      });

    setBook({
      tema_evento: '',
      descripcion_evento: '',
      fecha_evento: ''
    });
  };
  const showAlert = () => {
    Swal.fire({
      text: "Su registro fue exitoso",
      icon: "success",
      timer: 3000,
      confirmButtonText: "Aceptar"
    }).then((result) => {
      if (result.isConfirmed) {
        handleClose();
      }
    });
  };

  const showAlertError = () => {
    Swal.fire({
      text: "Ha ocurrido un error",
      icon: "error",
      confirmButtonText: "Aceptar"
    });
  };

  useEffect(() => {
    // Cargar los eventos desde la base de datos al montar el componente
    axios.get("http://localhost:7000/gestor/evento")
      .then(res => {
        setEventos(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
    <>
      <Button className="colorheader letter" onClick={handleShow}>
        ! Crea un nuevo evento !
      </Button>

      <Modal show={show} assName='colorheader' onHide={handleClose}>
        <Modal.Header closeButton className='colorheader'>
          <Modal.Title>Registro de asistencia </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <input type="text" className="form-control mb-2"
              placeholder="Tema del evento" aria-label="Username"
              aria-describedby="basic-addon1"
              name="tema_evento"
              onChange={handleChange}
              required />

            <textarea type="text" className="form-control mb-2"
              name="descripcion_evento"
              placeholder="Descripción del evento (hora,lugar etc.)" aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={handleChange}
              required />

            <input type="date" className="form-control mb-2"
              name="fecha_evento"
              placeholder="Fecha del evento" aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]} />

            <div className='espacioboton'>
              <center>
                <Button variant="secondary" className="btn btn colorheader mx-1" onClick={handleClose}>
                  Cancelar
                </Button>
                <button type="submit" className="btn btn colorheader mx-1" >
                  enviar
                </button>
              </center>
            </div>
          </Form>
        </Modal.Body>

      </Modal>
      {/* Renderizar las cards de eventos registrados */}

      <section id="events" className="events">
        <div className="container" data-aos="fade-up">

          <div className="row col-lg-12" >
            {eventos.filter((evento) => formatDate(evento.fecha_evento) !== null).map((evento, index) => (
              <div key={index} className="col-xl-4 d-flex flex-column align-items-stretch">

                <div className="events">
                  <div className="events-body">
                    <p className="events-title h5">{evento.tema_evento}</p>
                    <p className="fst-italic text-center">{formatDate(evento.fecha_evento)}</p>
                    <p className="events-text">{evento.descripcion_evento}</p>

                    {/* ``   <FormSugerencia book={book} setBook={setBook}/>`` */}

                  </div>
                </div>
              </div>
            ))}
            {/* ------------- */}
          </div>
        </div>
      </section>
    </>

  );
}

export default Formulariogestor;