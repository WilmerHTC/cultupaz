import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "../../assets/img/imgsena2.jpg"
import artesania from "../../assets/img/tejido-2.jpg"
import artesania2 from "../../assets/img/Mochila-4.jpg"
function AdminHome(){
  const [totalUsuarios, setTotalUsuarios] = useState(0);

  useEffect(() => {
    const TotalUsuarios = async () => {
      try {
        const response = await axios.get("http://localhost:7000/totalUsuarios");
        setTotalUsuarios(response.data.totalUsuarios);
      } catch (error) {
        console.log(error);
      }
    };

    TotalUsuarios();
  }, []);

  const [nuevaSolicitud, setnuevaSolicitudes] = useState(0);

  useEffect(() => {
    const nuevaSolicitudes= async () => {
      try {
        const response = await axios.get("http://localhost:7000/newSolicitud");
        setnuevaSolicitudes(response.data.nuevaSolicitud);
      } catch (error) {
        console.log(error);
      }
    };

    nuevaSolicitudes();
  }, []);

    return(
      <body>
        <main id="main" className="main">

          <div className="pagetitle">
            <h1>Inicio</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Inicio</a></li>
                <li className="breadcrumb-item"></li>
              </ol>
            </nav>
          </div>

          <section className="section contact">

            <div className="row gy-4">

              <div className="col-xl-6">

                <div className="row">
                <div className="col-lg-6">
                    <div className="info-box card text-center">
                      <i className="bi bi-person"></i>
                      <h3>Usuarios</h3>
                      <p>Total usuarios:<span>{totalUsuarios}</span></p>
                  
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="info-box card text-center">
                    <i className="bi bi-card-list"></i>
                      <h3>Solicitudes</h3>
                      <p>Nuevas: <span>{nuevaSolicitud}</span></p>
                      
                    </div>
                  </div>
                  
                  <div className="col-lg-12">
                    <div className="info-box card ">
                      <div className="row d-flex">
                        <div className="col-lg-6">
                          <i className="bi bi-back"></i>
                          <h3>Artesanias</h3>
                        </div> 
                        <div className="col-lg-6">
                          <img className="rounded mb-4" alt="img" src={artesania} width={60}/>
                          <img className="rounded position-absolute   mt-4"  alt="img" src={artesania2} width={60}/>
                        </div>
                      </div>
                     

                    </div>
                  </div>
                </div>

              </div>

              <div className="col-xl-6">
                <div className="card p-4">
                  <div className="info-box2 ">
                    
                      <div className="row justify-content-center align-items-center">
                          <img className="" src={img} alt="cultupaz" ></img>
                          <div className="m-2">
                              <h3>Cultupaz</h3>
                              <p>En este apartado administrador encontraremos todo lo 
                                  relacionado con el registro de usuario y el seguimiento de las artesanias subidas por ellos.</p>
                          </div>
                      </div>
                      
                  </div>
                </div>

              </div>

            </div>

          </section>

        </main>
           
      </body>
    )
}

export default AdminHome;