import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";
import Swal from "sweetalert2";

moment.locale("es");

function MisPublicaciones() {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const idUsuario = localStorage.getItem("idUsuario");
    const [publicaciones, setPublicaiones] = useState([]);
    const [fechaActual, setFechaActual] = useState(moment());

    useEffect(() => {
        const interval = setInterval(() => {
          setFechaActual(moment());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
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
    const misPublicaciones = async () => {
    try {
      const response = await axios.get(
        `http://localhost:7000/verMisPublicaciones/${localStorage.getItem("idUsuario")}`
      );
      setPublicaiones(response.data);
    } catch (error) {
      console.error(error);
    }
    };

    useEffect(() => {
        misPublicaciones();
    }, []);
 
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
            misPublicaciones();
            Swal.fire({
              icon: "success",
              title: "Publicación eliminada",
              showConfirmButton: false,
              timer: 1500,
            })
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
            misPublicaciones();
          }
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <div>
      <section id="events" className="events">
        <div className="container" data-aos="fade-up">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-2 publicacion">
         
            {publicaciones.map((muro, index) => {
              return (
                <div className="col-lg-4" key={index}>
                  <div className="card p-1">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-title">{muro.titulo}</h5>
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
                                onClick={() => eliminarPublicacion(muro.idMuro)}
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
                                onClick={() => editarPublicacion(muro)}
                              >
                                Editar
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p className="card-text">{muro.descripcion}</p>
                      <h6 className="card-subtitle mb-2 text-muted text-sice ">
                        {formatFechaCreacion(muro.fecha_creacion, fechaActual)}
                      </h6>
                    </div>
                  </div>
                </div>
                );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

export default MisPublicaciones;
