import "../../assets/css/gestores.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Agenda = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:7000/mostrarAsistencia")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <div>
        <div>
          <div className="container-fluid mb-4 pt-4 ml-50 arreglo">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p className="titulo10">Gestor De Paz</p>
              </blockquote>
              <figcaption className="blockquote-footer py-1">
                <cite title="Source Title">
                  No hay camino para la paz, la paz es el camino
                </cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="tablagestor">
          <div className="container-fluid py-1 ">
            <div className="row">
              <div className="col-12 container-fluid">
                <div className="justify-content-center card my-4 ">
                  <div className="container-fluid card-body px-0 ">
                    <div className="container-fluid table-responsive p-0">
                      <table className="table align-items-center mb-0">
                        <thead className="table-primary">
                          <tr>
                            <th className="text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7">
                              sugerencias
                            </th>
                          </tr>
                        </thead>

                        <tbody className="justify-content-center">
                          {data.map((Sugerencia_evento, idSugerencia_evento) => {
                            return (
                              <tr key={idSugerencia_evento}>
                                <td className="align-middle text-center mb-0 text-sm text-center">
                                  {Sugerencia_evento.descripcion_sugerencia_evento}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Agenda;
