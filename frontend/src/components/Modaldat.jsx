import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

const ModalButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleImagenChange = (event) => {
    setImagen(event.target.files[0]);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descripcion', descripcion);
    formData.append('imagen', imagen);

    axios.post('http://localhost:7000/api/endpoint', formData)
      .then(response => {
        console.log('Datos guardados exitosamente:', response.data);
        setShowModal(false);
      })
      .catch(error => {
        console.error('Error al guardar los datos:', error);
      });
  };

  return (
    <div>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Subir Imagen
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresar datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="titulo">
              <Form.Label>Título</Form.Label>
              <Form.Control type="text" value={titulo} onChange={handleTituloChange} />
            </Form.Group>
            <Form.Group controlId="descripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} value={descripcion} onChange={handleDescripcionChange} />
            </Form.Group>
            <Form.Group controlId="imagen">
              <Form.Label>Imagen</Form.Label>
              <Form.Control type="file" onChange={handleImagenChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalButton;


    


