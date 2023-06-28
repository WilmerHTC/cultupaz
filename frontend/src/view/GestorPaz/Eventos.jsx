import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/gestores.css';
import CrearEvento from './CrearEvento';

function Eventos() {
  const [verEventos, setEventos] = useState([]);
  const [fecha_evento, setTitulo] = useState('');
  const [descripcion_evento, setDescripcion] = useState('');
  const idUsuario = localStorage.getItem('idUsuario');

  useEffect(() => {
    traerEventos();
  }, []);

  const traerEventos = async () => {
    try {
      const { data } = await axios.get(`http://localhost:7000/mostrarMisEventos/${idUsuario}`);
      setEventos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const eventosFuturos = verEventos.filter((evento) => {
    const fecha = new Date(evento.fecha_evento);
    return fecha >= new Date();
  });

  const eliminarEvento = async (id) => {
    try {
      const result = await Swal.fire({
        icon: 'warning',
        title: '¿Estás seguro?',
        text: 'Esta acción no se puede deshacer',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Eliminar',
        cancelButtonColor: '#d33',
        reverseButtons: true,
      });

      if (result.isConfirmed) {
        await axios.delete(`http://localhost:7000/eliminarEvento/${id}`);
        traerEventos();
        Swal.fire({
          icon: 'success',
          title: 'Evento eliminado',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        text: 'Error al eliminar el evento',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  const editarEvento = async (evento) => {
    setTitulo(evento.tema_evento);
    setDescripcion(evento.descripcion_evento);

    Swal.fire({
      title: 'Editar publicación',
      html: `
        <div class="form-group">
          <label>Título:</label>
          <input id="swal-input1" class="swal2-input form-control" value="${evento.tema_evento}">
        </div>
        <div class="form-group">
          <label>Descripción:</label>
          <textarea id="swal-input2" class="swal2-textarea form-control">${evento.descripcion_evento}</textarea>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Guardar cambios',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const tema_evento = Swal.getPopup().querySelector('#swal-input1').value;
        const descripcion_evento = Swal.getPopup().querySelector('#swal-input2').value;
        return { tema_evento, descripcion_evento };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { tema_evento, descripcion_evento } = result.value;
        actualizarEvento(evento.idEvento, tema_evento, descripcion_evento);
      }
    });
  };

  const actualizarEvento = async (idEvento, nuevoTitulo, nuevaDescripcion) => {
    try {
      await axios.put(`http://localhost:7000/actualizarEvento/${idEvento}`, {
        tema_evento: nuevoTitulo,
        descripcion_evento: nuevaDescripcion,
      });
      traerEventos();
      Swal.fire({
        icon: 'success',
        title: 'Evento actualizado',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        text: 'Error al actualizar el evento',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  return (
    <div>
      <div className="container pt-5">
        <center>
          <div>
            <div className="container-psico pt-5">
              <h3 className="titulo101 pt-5">Gestores de paz</h3>
              <hr />
              <figcaption className="blockquote-footer py-3">
                <cite title="Source Title">
                  Fomenta la conservación y respeto a toda forma de vida en el entorno que nos desenvolvemos,
                  asegura las condiciones de justicia y equidad.
                </cite>
              </figcaption>
            </div>
          </div>
        </center>
      </div>
      <div className="d-flex justify-content-center m-2">
        <CrearEvento />
      </div>

      <section id="events" className="events">
        <div className="container" data-aos="fade-up">
          <div className="row col-lg-12">
            {eventosFuturos.map((evento) => {
              const fecha = new Date(evento.fecha_evento);
              const year = fecha.getFullYear();
              const month = String(fecha.getMonth() + 1).padStart(2, '0');
              const day = String(fecha.getDate()).padStart(2, '0');
              const formattedFecha = `${year}-${month}-${day}`;

              return (
                <div className="col-xl-4 d-flex flex-column align-items-stretch" key={evento.idEvento}>
                  <div className="events">
                    <div className="events-body">
                      <div className="dropdown dropdown-corner">
                        <i
                          className="bi bi-three-dots-vertical"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></i>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <Link
                              className="dropdown-item"
                              to={"#"}
                              onClick={() => eliminarEvento(evento.idEvento)}
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
                              onClick={() => editarEvento(evento)}
                            >
                              Editar
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <p className="events-title h5">Tema: {evento.tema_evento}</p>
                      <p className="fst-italic text-center">Fecha: {formattedFecha}</p>
                      <p className="events-text text-center">{evento.descripcion_evento}</p>
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

export default Eventos;
