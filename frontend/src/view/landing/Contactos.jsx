import React, { useState } from "react";
import contact from "../../assets/svg/contact.svg";
import CompFooter from "../../components/Footer";
import Swal from "sweetalert2";
import axios from "axios";
import { Button } from "react-bootstrap";

function Contactos() {
  const [descripcion, setDescripcion] = useState("");

  const registroSugerencia = async (event) => {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    if (descripcion === "") {
      Swal.fire({
        icon: "warning",
        title: "",
        text: "escribe algo antes de enviar",
      });
    } else {
      try {
        var resul = await axios.post("http://localhost:7000/registroSugerencia", {
          descripcion: descripcion,
        });

        if (resul.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Enviado correctamente",
            text: resul.data,
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            window.location.reload();
          });
        }
      } catch (error) {
        if (error.response.status === 400) {
          Swal.fire({
            icon: "error",
            text: error.response.data,
          });
        }
      }
    }
  };

  return (
    <div>
      <main className="bg-contactos">
        <div className="container mt-5 py-5 ">
          <div className="row align-items-md-stretch mt-4 mb-4">
            <div className="col-md-6 mb-3">
              <div className="h-100 p-5  bg-contact rounded-3">
                <h2>Lineas de atención: </h2>
                <div className="d-flex justify-content-between">
                  <ul className="navbar-nav">
                    <li className="nav-item ms-2">
                      <b>Telefono: </b> 98982930-23
                    </li>
                    <li className="nav-item ms-2">
                      <b>Celular:</b> 3123828930
                    </li>
                    <li className="nav-item ms-2">
                      <b>Email: </b>Cultupaz1@gmail.com<p></p>
                    </li>
                    <p className="ms-2">Redes sociales:</p>
                    <div className="d-flex ">
                      <i className="bi bi-facebook ms-2"></i>
                      <i className="bi bi-instagram ms-2"></i>
                      <i className="bi bi-whatsapp ms-2"></i>
                    </div>
                  </ul>
                  <img src={contact} alt="contac" width="50%" height="50%" />
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="h-100 p-5 bg-contact2 border rounded-3">
                <h2>Ayudanos a crecer</h2>
                <form onSubmit={registroSugerencia}>
                  <h5>Motivados a mejorar</h5>
                  <p>Estamos felices de que hagas parte de nosotros </p>
                  <div className="input-group mt-4 sugerencia">
                    <textarea
                      className="form-control"
                      aria-label="With textarea"
                      placeholder="Deja tu comentario"
                      value={descripcion}
                      onChange={(ev) => setDescripcion(ev.target.value)}
                    ></textarea>
                    <Button className="btn colorheader" type="submit">
                      enviar
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="p-1 mb-4 bg-light rounded-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.073056581052!2d-76.56688342922655!3d2.482768651378657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e300410eb607c65%3A0x614545787e90bea6!2sSENA!5e0!3m2!1ses!2sco!4v1685117841923!5m2!1ses!2sco"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
      <CompFooter />
    </div>
  );
}

export default Contactos;
