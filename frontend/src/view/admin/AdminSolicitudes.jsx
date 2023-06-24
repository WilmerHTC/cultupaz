import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function AdminSolicitudes() {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    treaerUsuarios();
  }, []);

  const treaerUsuarios = async () => {
    try {
      const { data } = await axios.get("http://localhost:7000/verSolicitud");
      setSolicitudes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const aceptarSolicitud = (id) => {
    Swal.fire({
      title: "",
      text: "¡Estas Seguro de aceptar la solicitud!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resul = await axios.put(
          `http://localhost:7000/aceptarSolicitud/${id}`
        );
        if (resul.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Solicitud Aceptada",
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
    <body>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Solicitudes</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/admin"}>Inicio</Link>
              </li>
              <li className="breadcrumb-item active">Solicitudes</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Nuevas Solicitudes </h5>
                  <table className="table datatable ">
                    <thead>
                      <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col" className="text-center">
                          Opciones
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {solicitudes.map((solicitudes) => (
                        <tr key={solicitudes.idUsuario}>
                          <td>{solicitudes.nombres}</td>
                          <td>{solicitudes.apellidos}</td>
                          <td>{solicitudes.correo}</td>
                          <td>{solicitudes.telefono}</td>
                          <td className="text-center">
                            <button
                              type="button"
                              className="btn btn-opt mx-1"
                              onClick={() =>
                                aceptarSolicitud(solicitudes.idUsuario)
                              }
                            >
                              Aceptar Solicitud
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}
export default AdminSolicitudes;
