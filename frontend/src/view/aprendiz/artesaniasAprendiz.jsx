import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SubirArtesania from "./components/subirArtesania.jsx"


function GaleriaAprendiz() {


      //mostrar imgenes
      const [artesanias, setArtesanias] = useState([]);

        // Función para obtener las artesanías desde el backend
        const obtenerArtesanias = async () => {
        try {
            const response = await axios.get('http://localhost:7000/mostrarArtesanias');
            setArtesanias(response.data);
        } catch (error) {
            console.error(error);
        }
        };

        useEffect(() => {
        obtenerArtesanias();
        }, []);

    return (
      <>
       
        <div className='container-fluid mb-4 pt-5'>
        <figure className='text-center pt-5'>
          <blockquote className='blockquote pt-5'>
            <p className='titulo10'>Galeria de artesanias</p>
          </blockquote>
          <figcaption className='blockquote-footer py-1'>
            <cite title="Source Title">Muestra tu talento, muestra su escencia</cite>
          </figcaption>
        </figure>
      </div>
        <div>
           <SubirArtesania/>
        </div> 

          <section className='container'>
            <div className='mt-3'>
                
<div className="row">
  {artesanias.map((artesania, index) => {
    // Verificar si el índice actual es divisible por 3 para distribuir las imágenes en las columnas
    if ((index + 1) % 3 === 0) {
      return (
        <div className="col-lg-4 " key={artesania.id}>
          <h3>{artesania.titulo}</h3>
          <p>{artesania.descripcion}</p>
          <img
            src={artesania.img_uno}
            alt="Imagen de artesanía"
            className=" img-fluid rounded mb-4"
          />
        </div>
      );
    } else {
      return (
        <div className="col-lg-4" key={artesania.id}>
          <h3>{artesania.titulo}</h3>
          <p>{artesania.descripcion}</p>
          <img
            src={artesania.img_uno}
            alt="Imagen de artesanía"
            className=" img-fluid rounded mb-4"
          />
        </div>
      );
    }
  })}
</div>

            
            </div>

          </section>
        
      </>
    );
  };
  
  export default GaleriaAprendiz;