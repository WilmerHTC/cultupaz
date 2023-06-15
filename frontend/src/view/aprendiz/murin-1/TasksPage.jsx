import { useEffect } from "react";
import TaskCard from "./TaskCard";
import { useTasks } from "../murin-1/TaskProvider";
import { Container, Row } from "react-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"


function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1></h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div fluid className="container py-4 mt-50px">
<div className='container-fluid mb-4 pt-5'>
        <figure className='text-center pt-5'>
          <blockquote className='blockquote pt-5'>
            <p className='titulo90'>Muro virtual</p>
          </blockquote>
          <figcaption className='blockquote-footer py-1 h5'>
            <cite title="Source Title "> Nuestras palabras construyen puentes de diálogo entre nosotros,
            <br></br>¡Expresa libremente tus ideas!</cite>
          </figcaption>
        </figure>
      </div>
      <Row className="justify-content-center">
        {renderMain()}
      </Row>
    </div>
  );
}

export default TasksPage