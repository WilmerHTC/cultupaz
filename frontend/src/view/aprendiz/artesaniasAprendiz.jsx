import React, { useEffect, useState } from "react";
import axios from "axios";
import SubirArtesania from "./components/subirArtesania.jsx";
import ActualizarArtesania from "./components/actualizarArtesania.jsx";
import Swal from "sweetalert2";
import { Modal } from "react-bootstrap";

function GaleriaAprendiz() {
  const [artesanias, setArtesanias] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [artesaniaEditando, setArtesaniaEditando] = useState(null);

  const obtenerArtesanias = async () => {
    try {
      const response = await axios.get(
        `http://localhost:7000/artesanias/${localStorage.getItem("idUsuario")}`
      );
      setArtesanias(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    obtenerArtesanias();
  }, []);

  const eliminarArtesania = async (id) => {
    try {
      Swal.fire({
        title: "",
        text: "¿Estás seguro de eliminar esta artesanía?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí",
        cancelButtonText: "Cancelar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const resul = await axios.delete(
            `http://localhost:7000/artesanias/${id}`
          );
          if (resul.status === 200) {
            Swal.fire({
              icon: "success",
              title: "¡Excelente!",
              text: resul.data,
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              obtenerArtesanias();
            });
          }
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const abrirModal = (artesania) => {
    setArtesaniaEditando(artesania);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  return (
    <>
      <div className="container-fluid mb-4 pt-5">
        <figure className="text-center pt-5">
          <blockquote className="blockquote pt-5">
            <p className="titulo10">Galería de artesanías</p>
          </blockquote>
          <figcaption className="blockquote-footer py-1">
            <cite title="Source Title">
              Muestra tu talento, muestra su esencia
            </cite>
          </figcaption>
        </figure>
      </div>

      <SubirArtesania />

      <section className="container">
        <div className="mt-3">
          <div className="row">
            {artesanias.map((artesania, index) => {
              return (
                <div
                  className="col-lg-4 align-items-stretch eventoone"
                  key={index}
                >
                  <div className="card">
                    <img
                      src={artesania.img_uno}
                      className="w-100 shadow-1-strong rounded img-tam"
                      alt="Artesanía"
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">
                        {artesania.titulo}
                      </h5>
                      <p className="card-text">{artesania.descripcion}</p>
                    </div>
                    <div className="d-flex justify-content-center p-4">
                      <button
                        type="button"
                        className="btn btn-eliminar m-1 p-2"
                        onClick={() => eliminarArtesania(artesania.idartesanias)}
                      >
                        <i className="bi bi-trash-fill m-1"></i>
                        Eliminar
                      </button>
                      <button
                        type="button"
                        className=" btn-reg m-1 p-2"
                        onClick={() => abrirModal(artesania)}
                      >
                        <i className="bi bi-pencil-fill m-1"></i>
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Modal show={modalAbierto} onHide={cerrarModal}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Artesanía</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {artesaniaEditando && (
            <ActualizarArtesania
              artesania={artesaniaEditando}
              onActualizar={() => {
                cerrarModal();
                obtenerArtesanias();
              }}
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default GaleriaAprendiz;
