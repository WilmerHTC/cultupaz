import React, { useState } from "react";
import { Modal, Button, Form as BForm } from "react-bootstrap";
import { Form, Formik } from "formik";
import { useTasks } from "../murin-1/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";

function TaskForm() {
  const { createTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    setTask({
      title: "",
      description: "",
    });
  };

  const handleSubmit = async (values, actions) => {
    await createTask(values);
    window.location.reload(); // Recargar la página
    handleClose();
  };


  return (
    <>



<div style={{ position: "absolute", bottom: "260px", display: "flex", justifyContent: "center", alignItems: "flex-end", width: "100%" }}>
  <Button className="botonmuro" onClick={() => setShowModal(true)}>
    Escribe tu opinión
  </Button>
</div>
      <Modal show={showModal} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          {/* <Modal.Title>Nueva </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <Formik
            initialValues={task}
            enableReinitialize={true}
            onSubmit={handleSubmit}
          >

            {({ handleChange, values, isSubmitting }) => (
              <Form className=" p-3 rounded">
                <BForm.Group>
                  <BForm.Label>Título</BForm.Label>
                  <BForm.Control
                    type="text"
                    name="title"
                    placeholder="Escribe un título"
                    onChange={handleChange}
                    value={values.title}
                  />
                </BForm.Group>
                <BForm.Group>
                  <BForm.Label>Descripción</BForm.Label>
                  <BForm.Control
                    as="textarea"
                    name="description"
                    rows="3"
                    placeholder="Escribe una descripción"
                    onChange={handleChange}
                    value={values.description}
                  />
                </BForm.Group>
                <div className=" d-flex justify-content-between " >
            <Button  className="colorheader mt-4" onClick={handleClose}>
              Cancelar
            </Button>
            <Button type="submit" disabled={isSubmitting} className="colorheader mt-4">
              {isSubmitting ? "Guardando..." : "Publicar"}
            </Button>
          </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TaskForm;