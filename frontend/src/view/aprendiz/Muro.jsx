import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";

function CrearTarea() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const idUsuario = localStorage.getItem("idUsuario");

  const registroTarea = async () => {
    if (titulo === "" || descripcion === "") {
      Swal.fire({
        icon: "error",
        text: "Todos los campos son requeridos",
        confirmButtonText: "Aceptar",
      });
    } else {
      try {
        var resul = await axios.post(
          "http://localhost:7000/publicacion",
          {
            titulo: titulo,
            descripcion: descripcion,
            idUsuario: idUsuario,
          }
        );

        if (resul.status === 200) {
          Swal.fire({
            icon: "success",
            title: "",
            text: resul.data,
            confirmButtonText: "Aceptar",
            timer: 3000,
          }).then(() => {
            window.location.reload(); // Recargar la página actual
          });
        }
      } catch (error) {
        if (error.response.status === 400) {
          Swal.fire({
            icon: "error",
            text: error.response.data,
          });
        }
      }
    }
  };

  return (
    <div>
      <Button
        className="btn colorheader letter"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        ¡Crea una nueva publicación!
      </Button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header colorheader">
              <h5 className="modal-title text-light">¡Crea una nueva tarea!</h5>
              <Button
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></Button>
            </div>
            <div className="modal-body">
              <form className="needs-validation text-light">
                <div>
                  <div>
                    <label className="formtext py-2">Título</label>
                    <textarea
                      className="form-control"
                      placeholder="Título de la tarea"
                      rows="2"
                      value={titulo}
                      onChange={(ev) => setTitulo(ev.target.value)}
                    />
                  </div>
                  <label className="formtext py-2">Descripción</label>
                  <div>
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Descripción de la tarea"
                      value={descripcion}
                      onChange={(ev) => setDescripcion(ev.target.value)}
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <Button className="btn colorheader" data-bs-dismiss="modal">
                Cancelar
              </Button>
              <Button
                value="regist"
                className="btn colorheader"
                onClick={registroTarea}
              >
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrearTarea;
