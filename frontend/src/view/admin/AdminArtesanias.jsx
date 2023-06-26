import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function AdminArtesanias() {
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

  //eliminar artesania
  const eliminarArtesania = async (id) => {
    try {Swal.fire({
      title: "",
      text: "¿Estas seguro de eliminar esta artesania?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resul = await axios.delete(
          `http://localhost:7000/artesanias/${id}}`
        );
        if (resul.status === 200) {
          Swal.fire({
            icon: "success",
            title: "¡Excelente!",
            text: resul.data,
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            cargarArtesanias();
          });
        }
      }
    });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Artesanias</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/Admin">Inicio</a>
              </li>
              <li className="breadcrumb-item active">Artesanias</li>
            </ol>
          </nav>
        </div>

        <div className="container px-4 py-4">
          <h2 className="pb-2 border-bottom">Artesanias</h2>

          <div className="container-fluid py-4">
            {/*inicio del div */}
            <div className="row justify-content-center">
              {/*PRIMERA CARD */}
              {/* <div className="col-xl-4 col-sm-6 mb-xl-5 mb-4">
                <div className="card shadow-dark">
                  <div className="card-header p-3 pt-2 ">
                    <div className="icon icon-lg icon-shape text-center border-radius-xl mt-n4 position-absolute">
                      <img src={lana1} className="foto" alt="user4"></img>
                      
                    </div>

                    <div className="text-end pt-1">
                      <h5 className="mb-0">Aleja Torres</h5>
                    </div>
                    <div className="bg-img">
                      <img
                        src={tejido2}
                        className="art-img"
                        alt="Bolso eb lana"
                      />
                    </div>
                  </div>
                 
                  <div className=" p-1 mt-3 justify-content-center  d-flex">
                    <p className="mb-0">
                      <button onClick={handleClick1} className="btn btn-opt m-1">
                        ver más
                      </button>
                      <button onClick={handleClick} className="btn btn-danger m-1">
                        Eliminar
                      </button>
                    </p>
                  </div>
                </div>
              </div> */}
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
                    {/* <h5 className="card-title text-center">{artesania.titulo}</h5> */}
                    {/* <p className="card-text">{artesania.descripcion}</p> */}
                    <p className="list-group-item"><b>Hecha por: </b> {usuario.nombre}</p>
                  </div>
                
                  <div className="d-flex justify-content-center pb-1" >
                    <button
                      type="button"
                      className="btn btn-eliminar m-1 p-2"
                      onClick={() => eliminarArtesania(artesania.idartesanias)}
                    >
                      <i className="bi bi-trash-fill m-1"></i>
                      Eliminar
                    </button>
                    {/* <ActualizarArtesania/> */}
                  </div>
                 
                </div>
              </div>
            );
          })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminArtesanias;
