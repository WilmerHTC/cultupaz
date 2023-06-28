import React, { useEffect, useState } from 'react';
import axios from "axios";
import moment from "moment";
import "moment/locale/es";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";


moment.locale("es");

function CrearPublicacion() {
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
        const resul = await axios.post(
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
            window.location.reload();
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
      <div className="d-flex justify-content-center m-2">
        <Button
          className="btn colorheader letter"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Crea una nueva publicación
        </Button>
      </div>

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
              <h5 className="modal-title text-light">Crea una nueva publicación </h5>
              <Button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
            </div>
            <div className="modal-body">
              <form className="needs-validation text-light">
                <div>
                  <div>
                    <label className="formtext py-2">Título</label>
                    <textarea
                      className="form-control"
                      placeholder="Título de tu comentario"
                      rows="2"
                      value={titulo}
                      onChange={(ev) => setTitulo(ev.target.value)}
                      required
                    ></textarea>
                    <div className="valid-feedback">¡Se ve bien!</div>
                  </div>
                  <div>
                    <label className="formtext py-2">Descripción</label>
                    <textarea
                      className="form-control"
                      placeholder="Descripción de tu comentario"
                      rows="5"
                      value={descripcion}
                      onChange={(ev) => setDescripcion(ev.target.value)}
                      required
                    ></textarea>
                    <div className="valid-feedback">¡Se ve bien!</div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <Button className="btn colorheader letter" onClick={registroTarea}>
                Publicar
              </Button>
              <Button className="btn btn-danger" data-bs-dismiss="modal">
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrearPublicacion;
