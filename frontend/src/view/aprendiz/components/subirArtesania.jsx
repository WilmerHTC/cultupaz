import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function SubirArtesania() {
 
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [img_uno, setImagen] = useState(null);
  const [img_render, setImgRender] = useState(null);

  const handleImageChange = (ev) => {
    setImagen(ev.target.files[0]);
    
    const file=ev.target.files[0]

    const render=new FileReader()

    render.onload=()=>{
      setImgRender(render.result)
    }

    render.readAsDataURL(file)

  };
  

  const subirImg = async () => {

    if (!titulo & !descripcion  ) {
      // Verificar si el campo de imagen está vacío
      Swal.fire({
        icon: "warning",
        text: "Todos los campos son obligatorios",
      });
      return; // Detener la ejecución de la función si no hay imagen seleccionada
    }
    if(!img_uno ) {
      // Verificar si el campo de imagen está vacío
      Swal.fire({
        icon: "warning",
        text: "Por favor selecciona una imagen",
      });
      return; //
    }
    try {
      const formData = new FormData();
      formData.append("imgArtesania", img_uno);
      formData.append("titulo", titulo);
      formData.append("descripcion", descripcion);
      formData.append("idUsuario", localStorage.getItem("idUsuario"));

      const loanding = Swal.fire({
        title: "Subiendo Artesania",
        text: "Por favor espera un momento...",
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const response = await axios.post(
        "http://localhost:7000/artesanias",
        formData
      );

      loanding.close();

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "¡excelente!",
          text: response.data,
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.reload();
        });
      }
    } catch (error) {
      if (error.response.status === 500) {
        Swal.fire({
          icon: "error",
          text: "Error al subir la artesanía",
        });
      }
    }
  };

  return (
    <>
      <div className=" container d-flex justify-content-center pb-3 border-bottom">
        <button
          type="button"
          className="p-2 btn-reg"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Subir artesanía
        </button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-nav">
                <h5 className="modal-title text-light" id="staticBackdropLabel">
                  Crear artesanía
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="needs-validation text-light">
                  <div className="row g-3">
                    <div className="col-sm-12">
                      <label className="form-label link">Título</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        value={titulo}
                        onChange={(ev) => setTitulo(ev.target.value)}
                      />
                    </div>

                    <div className="col-sm-12 mb-3">
                      <label className="form-label link">Descripción</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        value={descripcion}
                        onChange={(ev) => setDescripcion(ev.target.value)}
                      ></textarea>
                    </div>

                    <div className="col-sm-6 mb-3">
                      <label className="form-label link">Subir imagen</label>
                      <input
                        type="file"
                        className="form-control form-control-lg"
                        accept="image/jpeg, image/png"
                        onChange={handleImageChange}
                      />
                      <div className="selected-image text-center w-100 mb-3">
                      {img_render ? <img className='w-50' src={img_render} alt="Imagen seleccionada" /> : <p>No se ha seleccionado ninguna imagen</p>}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn-reg p-2"
                  onClick={subirImg}
                >
                  Subir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubirArtesania;
