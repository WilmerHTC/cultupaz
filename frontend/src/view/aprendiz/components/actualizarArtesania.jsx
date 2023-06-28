import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function ActualizarArtesania({ artesania, onActualizar }) {
  const [titulo, setTitulo] = useState(artesania.titulo);
  const [descripcion, setDescripcion] = useState(artesania.descripcion);
  const [img_uno, setImagen] = useState(null);

  const handleImageChange = (ev) => {
    const file = ev.target.files[0];
    setImagen(file);
  };

  const actualizarArtesania = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("imgArtesania", img_uno);
      formData.append("titulo", titulo);
      formData.append("descripcion", descripcion);
      formData.append("idUsuario", localStorage.getItem("idUsuario"));

      const loading = Swal.fire({
        title: "Actualizando Artesania",
        text: "Por favor espera un momento...",
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const response = await axios.put(
        `http://localhost:7000/artesania/${artesania.idartesanias}`,
        formData
      );

      loading.close();
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "¡Artesanía actualizada!",
          text: response.data,
          showConfirmButton: false,
          timer: 1500,
        })
      }

      onActualizar();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al actualizar",
        text: "Hubo un error al actualizar la artesanía. Por favor, intenta de nuevo.",
      });
    }
  };

  return (
    <div className="card-body">
      <form onSubmit={actualizarArtesania} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título:
          </label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Descripción:
          </label>
          <textarea
            className="form-control"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label link">Subir imagen</label>
          <input
            type="file"
            className="form-control form-control-lg"
            accept="image/jpeg, image/png"
            name="imgArtesania"
            onChange={handleImageChange}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Guardar cambios
        </button>
      </form>
    </div>
  );
}

export default ActualizarArtesania;
