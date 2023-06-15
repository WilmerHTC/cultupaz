import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";
import axios from 'axios';

function GaleriaAprendiz() {
  const [show, setShow] = useState(false);
  const [artesanias, setArtesanias] = useState([]);
  const [book, setBook] = useState({
    titulo: '',
    descripcion: '',
    imagen: null
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "imagen") {
      setBook({
        ...book,
        imagen: files[0]
      });
    } else {
      setBook({
        ...book,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", book.titulo);
    formData.append("descripcion", book.descripcion);
    formData.append("imagen", book.imagen);

    axios.post("http://localhost:7000/aprendiz/artesanias", formData)
      .then(res => {
        console.log(res);
        setArtesanias([...artesanias, res.data]);
        showAlert();
      })
      .catch(err => {
        console.log(err);
        showAlertError();
      });

    setBook({
      titulo: '',
      descripcion: '',
      imagen: null
    });
  };

  const showAlert = () => {
    Swal.fire({
      text: "Se publicó la artesanía con éxito",
      icon: "success",
      timer: 3000,
      confirmButtonText: "Aceptar"
    }).then((result) => {
      if (result.isConfirmed) {
        handleClose();
        window.location.reload(); // Recargar la página
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
    axios.get("http://localhost:7000/aprendiz/artesanias")
      .then(res => {
        setArtesanias(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Button className="sisi" onClick={handleShow}>
        ¡Crea un nuevo evento!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Publica artesanías</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} enctype="multipart/form-data">
            <Form.Group controlId="formTitulo">
              <Form.Label>Tema del evento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tema del evento"
                name="titulo"
                value={book.titulo}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDescripcion">
              <Form.Label>Descripción del evento</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Descripción del evento (hora, lugar, etc.)"
                name="descripcion"
                value={book.descripcion}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                name="imagen"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <div className='espacioboton'>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button type="submit">
                Enviar
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Renderizar las cards de eventos registrados */}
      <section id="events" className="events">
        <div className="container" data-aos="fade-up">
          <div className="row col-lg-12">
            {artesanias.map((artesanias, index) => (
              <div key={index} className="col-xl-4 d-flex flex-column align-items-stretch">
                <div className="events">
                  <div className="events-body">
                    <p className="events-text h5">{artesanias.titulo}</p>
                    <p className="events-text">{artesanias.descripcion}</p>
                    {artesanias.imagen && (
                      <img src={`http://localhost:7000/guardar/${artesanias.imagen}`} className="events-image"  />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default GaleriaAprendiz;
