import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";

function CrearEvento() {
  const [tema_evento, setTema] = useState("");
  const [descripcion_evento, setDescripcion] = useState("");
  const [fecha_evento, setFecha] = useState("");
  // const [foto_evento, setFoto] = useState("");

  const diahoy = new Date();
  diahoy.setDate(diahoy.getDate() + 1); // Sumar 1 día a la fecha actual

  const diasgte = diahoy.toISOString().split('T')[0];
  const idUsuario = localStorage.getItem("idUsuario");

  const registroEvento = async () => {
    if (
      tema_evento === "" ||
      descripcion_evento === "" ||
      fecha_evento === ""
      // foto_evento === "" 

    ) {
      Swal.fire({
        icon: "error",
        text: "Todos los campos son requeridos",
        confirmButtonText: "Aceptar",
      });
    } else {

      try {
        var resul = await axios.post(
          "http://localhost:7000/crearEvento",
          {
            tema_evento: tema_evento,
            descripcion_evento: descripcion_evento,
            fecha_evento: fecha_evento,
            // foto_evento: foto_evento,
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
    <div >

      <Button className=" btn colorheader letter" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        ! Crea un nuevo evento !
      </Button>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header colorheader">
              <h5 className="modal-title text-light">¡Agenda/Crea Un Nuevo Evento!</h5>
              <Button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
            </div>
            <div className="modal-body">
              <form className="needs-validation text-light">
                <div>
                  <div>
                    <label className="formtext py-2">
                      Tema
                    </label>
                    <textarea
                      className="form-control"
                      placeholder="Tema del evento"
                      rows="2"
                      value={tema_evento}
                      onChange={(ev) => setTema(ev.target.value)}
                    />
                  </div>
                  <label className="formtext py-2">
                    Descripción
                  </label>
                  <div >
                    <textarea className="form-control" rows="5" placeholder="Descripción del evento (hora,lugar etc.)" value={descripcion_evento}
                      onChange={(ev) => setDescripcion(ev.target.value)}></textarea>
                  </div>

                  <div>
                    <label className="formtext py-2">
                      Fecha
                    </label>
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      value={fecha_evento}
                      min={diasgte}
                      onChange={(ev) => setFecha(ev.target.value)}
                    />
                  </div>
                  {/* <div className="col-sm-6 mb-3">
                      <label className="form-label py-2" for="email">
                        Foto
                      </label>
                      <input
                        type="file"
                        className="form-control form-control-lg"
                        value={foto_evento}
                        onChange={(ev) => setFoto(ev.target.value)}
                      />
                    </div> */}
                </div>


              </form>
            </div>
            <div className="modal-footer">
              <Button className="btn colorheader" data-bs-dismiss="modal">Cancelar</Button>
              <Button value="regist" className="btn colorheader" onClick={registroEvento}  >
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default CrearEvento;