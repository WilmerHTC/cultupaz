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

  const redirectToWhatsApp = (event) => {
    event.preventDefault();
    const phoneNumber = event.target.getAttribute('data-phone');
    window.open('https://api.whatsapp.com/send?phone=' + phoneNumber, '_blank');
  };
  
  return (
    <div className="container mt-5 py-5">
      
      <section className="container ">
        <div className="mt-3">
         <div class="row ">
          {artesanias.map((artesania, index) => {
            const usuario = artesania.usuario;
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
                  <div className="card-body d-flex justify-content-between ">
                    <p className="list-group-item"><b>Hecha por: </b><br/> {usuario.nombre}</p>
                    <a href="#" className="card-link" >
                      <i className="bi bi-whatsapp" data-phone={usuario.telefono} onClick={redirectToWhatsApp}></i>
                    </a>
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
export default Galeria;
