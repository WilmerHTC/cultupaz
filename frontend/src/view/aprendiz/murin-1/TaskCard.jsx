import React, { useState } from "react";
import { useTasks } from "./TaskProvider";
import { Card, Button, Badge, Modal } from "react-bootstrap";
import { FiTrash2, FiEdit, FiCheckSquare, FiSquare } from "react-icons/fi";

function TaskCard({ task }) {
  
  const { deleteTask, toggleTaskDone, updateTask } = useTasks();
  const [showModal, setShowModal] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
  });

  const handleEdit = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setEditedTask({
      title: task.title,
      description: task.description,
    });
  };

  const handleSave = async () => {
    await updateTask(task.id, editedTask);
    setShowModal(false);
    window.location.reload()
  };

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <div className=" tarjetas col-sm-6 col-md-4 mb-4 ">
      
      <Card bg="" text="dark" className="h-100 border border-primary">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">{task?.title}</h5>
        </Card.Header>
        <Card.Body>
          <Card.Text>{task?.description}</Card.Text>
          <Card.Text>
            <small className="text-muted">{task?.createAt}</small>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
           <Button
            variant="outline-danger"
            size="sm"
            onClick={() => deleteTask(task.id)}
          >
            <FiTrash2 />
          </Button>
          <div>
            <Button
              className="me-2"
              variant="outline-secondary"
              size="sm"
              onClick={handleEdit}
            >
              <FiEdit />
            </Button>
            <Button variant="outline-secondary" size="sm" onClick={() => handleDone(task.done)}>
              {task.done === 1 ? <FiSquare /> : <FiCheckSquare />}
            </Button>
          </div> 
        </Card.Footer>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Título
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={editedTask.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Descripción
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="3"
                value={editedTask.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TaskCard;
