import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SubirArtesania() {
    const navigate = useNavigate();
  
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [img_uno, setImagen] = useState(null);
  
    const handleImageChange = (ev) => {
      setImagen(ev.target.files[0]);
    };
  
    const subirImg = async () => {
        if (titulo === '' || descripcion === '' || !img_uno) {
          Swal.fire({
            icon: 'error',
            text: 'Para continuar, debes subir una imagen y completar todos los campos',
          });
        } else {
          const formData = new FormData();
          formData.append('imagen', img_uno); // Cambia 'img_uno' a 'imagen' para que coincida con el nombre del campo en el backend
          formData.append('titulo', titulo);
          formData.append('descripcion', descripcion);
          formData.append('idUsuario', 1);
          try {
            const response = await axios.post('http://localhost:7000/crearArtesania', formData);
      
            if (response.status === 200) {
              Swal.fire({
                icon: 'success',
                title: '',
                text: response.data,
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                navigate('/aprendiz/galeria');
              });
            }
          } catch (error) {
            if (error.response.status === 500) {
              Swal.fire({
                icon: 'error',
                text: 'Error al subir la artesanía',
              });
            }
          }
        }
      };


    

    return (
      <>
        <div className='py-5 my-5'>
          <button type="button" className="p-2 btn-reg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Subir artesanía
          </button>
  
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-nav">
                  <h5 className="modal-title text-light" id="staticBackdropLabel">Crear artesanía</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                  <button type="button" className="btn-reg p-2" onClick={subirImg}>
                    Subir
                  </button>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </>
    );
  };
  
  export default SubirArtesania;