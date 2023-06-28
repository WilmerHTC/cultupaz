import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/slider.css";

moment.locale("es");

function MuroAprendiz() {
  const [verMuro, setMuro] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const idUsuario = localStorage.getItem("idUsuario");
  const [fechaActual, setFechaActual] = useState(moment());
  const [mostrarMisPublicaciones, setMostrarMisPublicaciones] = useState(false);

  useEffect(() => {
    treaerEventos();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFechaActual(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const treaerEventos = async () => {
    try {
      const { data } = await axios.get("http://localhost:7000/verPublicaciones");
      setMuro(data);
      if (mostrarMisPublicaciones) {
        setMuro(data.filter((publicacion) => publicacion.idUsuario === idUsuario));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formatFechaCreacion = (fechaCreacion) => {
    const fechaActual = moment();
    const fecha = moment(fechaCreacion);

    if (fecha.isAfter(fechaActual)) {
      return "Fecha inválida";
    }

    const diffSeconds = Math.abs(fechaActual.diff(fecha, "seconds"));

    if (diffSeconds < 60) {
      return `Hace un momento`;
    } else {
      const diffMinutes = Math.abs(fechaActual.diff(fecha, "minutes"));

      if (diffMinutes < 60) {
        return `Hace ${diffMinutes} minuto${diffMinutes !== 1 ? "s" : ""}`;
      } else {
        const diffHours = Math.abs(fechaActual.diff(fecha, "hours"));

        if (diffHours < 24) {
          return `Hace ${diffHours} hora${diffHours !== 1 ? "s" : ""}`;
        } else if (diffHours < 48) {
          return "Hace 1 día";
        } else {
          const diffDays = Math.abs(fechaActual.diff(fecha, "days"));

          if (diffDays <= 5) {
            return `Hace ${diffDays} día${diffDays !== 1 ? "s" : ""}`;
          } else {
            return `Creado el ${fecha.format("D [de] MMMM [del] YYYY")}`;
          }
        }
      }
    }
  };

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
// Función para obtener las artesanías desde el backend
const verMisPublicaciones = async () => {
  try {
    const response = await axios.get(
      `http://localhost:7000/verMisPublicaciones/${localStorage.getItem("idUsuario")}`
    );
    verMuro(response.data);
  } catch (error) {
    console.error(error);
  }
};

  const eliminarPublicacion = async (id) => {
    try {
      const result = await Swal.fire({
        icon: "warning",
        title: "¿Estás seguro?",
        text: "Esta acción no se puede deshacer",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Eliminar",
        cancelButtonColor: "#d33",
        reverseButtons: true,
      });

      if (result.isConfirmed) {
        await axios.delete(
          `http://localhost:7000/eliminarPublicacion/${id}`
        );
        treaerEventos();
        Swal.fire({
          icon: "success",
          title: "Publicación eliminada",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        text: "Error al eliminar la publicación",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const editarPublicacion = async (publicacion) => {
    setTitulo(publicacion.titulo);
    setDescripcion(publicacion.descripcion);
    console.log("idUsuario:", idUsuario);

    Swal.fire({
      title: "Editar publicación",
      html: `
        <div class="form-group">
          <label>Título:</label>
          <input id="swal-input1" class="swal2-input form-control" value="${publicacion.titulo}">
        </div>
        <div class="form-group">
          <label>Descripción:</label>
          <textarea id="swal-input2" class="swal2-textarea form-control">${publicacion.descripcion}</textarea>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Guardar cambios",
      cancelButtonText: "Cancelar",
      preConfirm: () => {
        const titulo = Swal.getPopup().querySelector("#swal-input1").value;
        const descripcion = Swal.getPopup().querySelector("#swal-input2").value;
        return { titulo, descripcion };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { titulo, descripcion } = result.value;
        actualizarPublicacion(publicacion.idMuro, titulo, descripcion);
      }
    });
  };

  const actualizarPublicacion = async (idMuro, titulo, descripcion) => {
    try {
      const response = await axios.put(
        `http://localhost:7000/editarPublicacion/${idMuro}`,
        {
          titulo: titulo,
          descripcion: descripcion,
        }
      );

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "",
          text: "Publicación actualizada correctamente",
          confirmButtonText: "Aceptar",
        });
        treaerEventos();
      }
    } catch (error) {
      console.log(error);
    }
  };
 const handleMostrarMisPublicaciones = () => {
    setMostrarMisPublicaciones(!mostrarMisPublicaciones);
  };
  return (
    <div>
      <div className="container pt-5">
        <center>
          <div>
            <div className="container-psico pt-5">
              <h3 className="titulo101 pt-5">Muro virtual</h3>
              <hr />
              <figcaption className='blockquote-footer py-3'><cite title="Source Title"> Nuestras palabras construyen puentes de diálogo entre nosotros,
            <br></br>¡Expresa libremente tus ideas!</cite></figcaption>
            </div>
          </div>
        </center>
      </div>
      <div className="d-flex justify-content-center m-2">
        <Button
          className="btn colorheader letter"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Crea una nueva publicación
        </Button>
      </div>

      <section id="events" className="events">
        <div className="container" data-aos="fade-up">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-2 publicacion">
            {verMuro
              .sort((a, b) => new Date(b.fecha_creacion) - new Date(a.fecha_creacion))
              .map((Muro, idMuro) => (
                <div className="col-lg-4" key={idMuro}>
                  <div className="card p-1">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-title">{Muro.titulo}</h5>
                        <div className="btn-group dropstart">
                          <i
                            className="bi bi-three-dots-vertical mt-3"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          ></i>
                          <ul className="dropdown-menu text-center">
                            <li>
                              <Link
                                className="dropdown-item"
                                to={"#"}
                                onClick={() => eliminarPublicacion(Muro.idMuro)}
                              >
                                Eliminar
                              </Link>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to={"#"}
                                onClick={() => editarPublicacion(Muro)}
                              >
                                Editar
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p className="card-text">{Muro.descripcion}</p>
                      <h6 className="card-subtitle mb-2 text-muted text-sice ">
                        {formatFechaCreacion(Muro.fecha_creacion, fechaActual)}
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

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

export default MuroAprendiz;
