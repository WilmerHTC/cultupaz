import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function AdminUsuarios() {
  const [usuariosAprendiz, setUsuariosA] = useState([]);

  useEffect(() => {
    treaerUsuarios();
  }, []);

  const treaerUsuarios = async () => {
    try {
      const { data } = await axios.get("http://localhost:7000/verAprendices");
      setUsuariosA(data);
    } catch (error) {
      console.log(error);
    }
  };

  //usuarios gestor
  const [usuariosGestor, setUsuariosG] = useState([]);

  useEffect(() => {
    treaerUsuariosG();
  }, []);

  const treaerUsuariosG= async () => {
    try {
      const { data } = await axios.get("http://localhost:7000/verGestores");
      setUsuariosG(data);
    } catch (error) {
      console.log(error);
    }
  };


  //inactivar usuarios
  const inactivarUsuario = (id) => {
    Swal.fire({
      text: "¡Estas Seguro de inactivar este usuario!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resul = await axios.put(
          `http://localhost:7000/inactivarUsuario/${id}`
        );
        if (resul.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Usuario Inactivado",
            text: resul.data,
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            window.location.reload();
          });
        }
      }
    });
  };
   //activar usuarios
   const activarUsuario = (id) => {
    Swal.fire({
      text: "¡Estas Seguro de activar este usuario!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resul = await axios.put(
          `http://localhost:7000/activarUsuario/${id}`
        );
        if (resul.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Usuario activado",
            text: resul.data,
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            window.location.reload();
          });
        }
      }
    });
  };
  
    
  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Usuarios</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="#">Inicio</Link>
              </li>
              <li className="breadcrumb-item active">usuarios</li>
            </ol>
          </nav>
        </div>
        <section className="tabs-info">
          <div className="container-fluid">
              <div className="d-flex justify-content-center">
                <ul className="nav nav-pills " id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true">
                      usuario aprendiz
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      usuarios gestor
                    </button>
                  </li>             
                </ul>
              </div>

              <div className="tab-content " id="myTabContent">
                <div
                  className="tab-pane fade show active  "
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="home-tab">

                  <div className="row">
                    
                    <section className="section">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">Usuarios aprendiz</h5>
                              <div className="table-responsive">
                                <table className=" table datatable">
                                  <thead>
                                    <tr>
                                      
                                      <th scope="col">Nombre</th>
                                      <th scope="col">Apellido</th>
                                      <th scope="col">telefono</th>
                                      <th scope="col">ficha</th>
                                      <th scope="col">genero</th>
                                      <th scope="col" className="text-center">Opciones</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {usuariosAprendiz.map((usuarios,idUsuario )=>{
                                        return <tr key={idUsuario}>
                                    
                                          <td>{usuarios.nombres}</td>
                                          <td>{usuarios.apellidos}</td>
                                          <td>{usuarios.telefono}</td>
                                          <td>{usuarios.ficha}</td>
                                          <td>{usuarios.genero}</td>
                                          <td className="text-center">
                                          <button
                                            type="button"
                                            className="btn btn-opt mx-1"
                                            
                                          >
                                           inactivar
                                          </button>
                                          </td>

                                        </tr>
                                        
                                    })}
                                    
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  
                  </div>
                </div>
                <div
                  className="tab-pane fade "
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                 <div className="row">
                    
                    <section className="section">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">Usuarios gestores</h5>
                              <div className="table-responsive">
                              <table className="table datatable">
                                <thead>
                                  <tr>
                                    
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido</th>
                                    <th scope="col">telefono</th>
                                    <th scope="col">genero</th>
                                    <th scope="col">correo</th>
                                    <th scope="col"className="text-center">Opciones</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {usuariosGestor.map((usuarios,idUsuario )=>{
                                      return <tr key={idUsuario}>
                                  
                                        <td>{usuarios.nombres}</td>
                                        <td>{usuarios.apellidos}</td>
                                        <td>{usuarios.telefono}</td>
                                        <td>{usuarios.genero}</td>
                                        <td>{usuarios.correo}</td>
                                        <td className="text-center">
                                            <button type="button" 
                                              className="btn btn-opt mx-1" 
                                              onClick={()=>inactivarUsuario(usuarios.idUsuario)}>
                                              Inactivar
                                            </button>
                                          </td>
                                        

                                      </tr>
                                      
                                  })}
                                  
                                </tbody>
                              </table>
                              </div>
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  
                  </div>
                 
                </div>
              </div>
            </div>
      
        </section>

       
      </main>
    </div>
  );
}
export default AdminUsuarios;
