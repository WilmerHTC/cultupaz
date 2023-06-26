import React, { useEffect, useState } from "react";
import axios from "axios";
import SubirArtesania from "./components/subirArtesania.jsx";
import ActualizarArtesania from "./components/actualizarArtesania.jsx";
import Swal from "sweetalert2";

function GaleriaAprendiz() {
  //mostrar imgenes
  const [artesanias, setArtesanias] = useState([]);

  // Función para obtener las artesanías desde el backend
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


  //eliminar artesania
  const eliminarArtesania = async (id) => {
    try {Swal.fire({
      title: "",
      text: "¿Estas seguro de eliminar esta artesania?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resul = await axios.delete(
          `http://localhost:7000/artesanias/${id}}`
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
  return (
    <>
      <div className="container-fluid mb-4 pt-5">
        <figure className="text-center pt-5">
          <blockquote className="blockquote pt-5">
            <p className="titulo10">Galeria de artesanias</p>
          </blockquote>
          <figcaption className="blockquote-footer py-1">
            <cite title="Source Title">
              Muestra tu talento, muestra su escencia
            </cite>
          </figcaption>
        </figure>
      </div>

        <SubirArtesania />


      <section className="container">
        <div className="mt-3">
        <div class="row ">
          {artesanias.map((artesania, index) => {
            return (
              <div className="col-xl-4 d-flex align-items-stretch eventoone" key={index}>
                <div className="card">
                
                  <img
                    src={artesania.img_uno}
                    className="w-100 shadow-1-strong rounded img-tam "
                    alt="Artesanía"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{artesania.titulo}</h5>
                    <p className="card-text">{artesania.descripcion}</p>
                  </div>
                  <div className="d-flex justify-content-center p-4" >
                    <button
                      type="button"
                      className="btn btn-eliminar m-1 p-2"
                      onClick={() => eliminarArtesania(artesania.idartesanias)}
                    >
                      <i className="bi bi-trash-fill m-1"></i>
                      Eliminar
                    </button>
                    {/* <ActualizarArtesania/> */}
                  </div>
                 
                </div>
              </div>
            );
          })}
</div>
        </div>
      </section>
    </>
  );
}

export default GaleriaAprendiz;
