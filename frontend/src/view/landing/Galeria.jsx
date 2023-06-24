import axios from "axios";
import React, { useEffect, useState } from "react";

function Galeria() {
  const [artesanias, setArtesanias] = useState([]);

  useEffect(() => {
    cargarArtesanias();
  }, []);

  const cargarArtesanias = async () => {
    try {
      const resul = await axios.get("http://localhost:7000/artesanias");
      setArtesanias(resul.data);
    } catch (error) {
      console.log("Ocurrio un error");
    }
  };

  console.log(artesanias);

  return (
    <div className="container mt-5 py-5">
      
      <section className="container">
        <div className="mt-3">
          <div className="row">
            {artesanias.map((artesania) => {
              const usuario = artesania.usuario; // Obtener el objeto de usuario de la artesanía
              return (
                <div className="col-lg-4" key={artesania.id}>
                  
                  <img
                    src={artesania.img_uno}
                    alt="Imagen de artesanía"
                    className="img-fluid rounded mb-4"
                  />
                  <h3>{artesania.titulo}</h3>
                  <p>{artesania.descripcion}</p>
                  <p>Nombre: {usuario.nombre}</p> {/* Mostrar el nombre del usuario */}
                  <p>Apellido: {usuario.apellido}</p> {/* Mostrar el apellido del usuario */}
                  <p>Teléfono: {usuario.telefono}</p> {/* Mostrar el teléfono del usuario */}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
export default Galeria;
