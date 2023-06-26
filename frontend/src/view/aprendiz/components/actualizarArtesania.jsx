import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function ActualizarArtesania ({ idartesanias }){
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [idUsuario, setIdUsuario] = useState('');
    const [imagen, setImagen] = useState(null);
  
    useEffect(() => {
      const obtenerDatosArtesania = async () => {
        try {
          const response = await axios.get(`http://localhost:7000/artesania/${idartesanias}`);
          const { titulo, descripcion, idUsuario } = response.data;
          setTitulo(titulo);
          setDescripcion(descripcion);
          setIdUsuario(idUsuario);
        } catch (error) {
          console.error(error);
        }
      };
  
      obtenerDatosArtesania();
    }, [idartesanias]);
  
    const handleActualizar = async () => {
        try {
          if (!titulo || !descripcion || !idUsuario) {
            // Realiza la validación de los campos requeridos en el frontend
            return alert('Todos los datos son requeridos');
          }
    
          const formData = new FormData();
          formData.append('titulo', titulo);
          formData.append('descripcion', descripcion);
          formData.append('idUsuario', idUsuario);
          if (imagen) {
            formData.append('imgArtesania', imagen);
          }
    
          const response = await axios.put(`http://localhost:7000/artesanias/${idartesanias}`, formData);
          console.log(response.data); // Mensaje de éxito de la API
    
          // Restablecer los campos después de la actualización exitosa
          setTitulo('');
          setDescripcion('');
          setIdUsuario('');
          setImagen(null);
    
          alert('Artesanía actualizada correctamente');
        } catch (error) {
          console.error(error);
          alert('No se pudo actualizar la artesanía');
        }
      };
  
    return (
      <div>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título"
        />
        <input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción"
        />
        <input
          type="text"
          value={idUsuario}
          onChange={(e) => setIdUsuario(e.target.value)}
          placeholder="ID Usuario"
        />
        <input
          type="file"
          onChange={(e) => setImagen(e.target.files[0])}
        />
        <button onClick={handleActualizar}>Actualizar</button>
      </div>
    );
  };
  

export default ActualizarArtesania;
