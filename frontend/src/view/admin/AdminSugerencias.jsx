
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';



function AdminSugerencias() {
  const [sugerencias, setSugerencia] = useState([]);

  useEffect(() => {
    traerSugerencia();
  }, []);


  const traerSugerencia = async () => {
    try {
      const resul = await axios.get("http://localhost:7000/verSugerencias");
      setSugerencia([resul.data]);
     
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <>
    <main id="main" className="main">
        <div className="pagetitle">
          <h1>Sugerencias</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/admin"}>Inicio</Link>
              </li>
              <li className="breadcrumb-item active">Sugerencias</li>
            </ol>
          </nav>
        </div>
        <div className="container ">
          <section  className="section sug"> 
          <div className="row">
            <div className="col-lg-12">
           
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-2 publicacion">
              {sugerencias.map((sugerencia, idSugerencia) => (
                
                <div className="col-lg-4" key={idSugerencia}>
                    <div className="card p-1">
                      <div className="card-body">
                          <h5 className="title-sug p-2">Descripcion sugerencia:</h5> 
                        <p className='p-2'>{sugerencia.descripcion}</p>
                      </div>
                    </div>
                  </div>
                
                ))}
              </div>
            </div>
            
            </div>
          </section>
        </div>

        </main>
        </>
    
  );
  
}

export default AdminSugerencias;