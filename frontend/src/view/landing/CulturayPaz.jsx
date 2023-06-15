import React from "react";
import Swal from "sweetalert2";
import PazColombia from "../../assets/img/PazColombia.jpeg";
import orgullo from "../../assets/img/orgullo.png";
import ambiental from "../../assets/img/ambiental.jpg";
import CompFooter from "../../components/Footer";

function Culturaypaz() {
  const handleClick1 = () => {
    Swal.fire({
      title:
        "¿Qué es exactamente el esfuerzo de paz total de Colombia y cómo avanza?",
      confirmButtonText: "Ver más",
      cancelButtonText: "Cancelar",
      imageUrl:
        "https://www.wola.org/wp-content/uploads/2023/03/GettyImages-1430149987-scaled-e1678307544272-1024x684.jpg",
      showCancelButton: true,

      customClass: {
        popup: "swal2-custom",
        title: "swal2-title",
        content: "swal2-content",
        image: "swal2-image",
        actions: "swal2-actions",
        confirmButton: "swal2-confirm ",
        cancelButton: "swal2-cancel",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(
          "https://www.wola.org/es/events/que-exactamente-esfuerzo-paz-total-colombia-avanza/"
        );
      }
    });
  };

  const handleClick2 = () => {
    Swal.fire({
      title: "¿LGTBIQ+ Terminología de la diversidad?",
      confirmButtonText: "Ver más",
      cancelButtonText: "Cancelar",
      imageUrl:
        "https://plazadiversa.com/wp-content/uploads/Qui%C3%A9nes-conforman-la-comunidad-LGBT.jpg",
      showCancelButton: true,
      customClass: {
        popup: "swal2-custom",
        title: "swal2-title",
        content: "swal2-content",
        image: "swal2-image",
        actions: "swal2-actions",
        confirmButton: "swal2-confirm",
        cancelButton: "swal2-cancel",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.open("https://www.pnitas.es/lgtbiq-diversidad-sexual-genero/");
      }
    });
  };

  const handleClick3 = () => {
    Swal.fire({
      title:
        "¿Cuál es el plan del gobierno de Gustavo Petro para el medioambiente?",
      confirmButtonText: "Ver más",
      cancelButtonText: "Cancelar",

      imageUrl:
        "https://static.wixstatic.com/media/763eb1_bdcbadcf4bb647a893bab0e648f12d8c.jpg/v1/fill/w_516,h_290,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/763eb1_bdcbadcf4bb647a893bab0e648f12d8c.jpg",
      showCancelButton: true,
      customClass: {
        popup: "swal2-custom",
        title: "swal2-title",
        content: "swal2-content",
        image: "swal2-image",
        actions: "swal2-actions",
        confirmButton: "swal2-confirm",
        cancelButton: "swal2-cancel",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(
          "https://www.javeriana.edu.co/pesquisa/propuestas-de-gustavo-petro-medioambiente-colombia-justicia-ambiental/"
        );
      }
    });
  };

  return (
    <div>
    
    <h1 className="tittle" >cultura y paz</h1>
    <hr id="culturaypaz"></hr>
    <div className="containerk">
      <div className="row">
        <div className="column-1"> 
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
            
          >
           
            <div className="carousel-inner">
     
              <div className="carousel-item active">
             
                <img src={PazColombia} className="d-block w-100" alt="..." />
                <div className="carousel-caption">
                    
                  <h3>Paz Total</h3>
                  <p>
                    La política de Paz Total es un esfuerzo multifacético que
                    busca minimizar la violencia, proteger a los civiles y
                    desmantelar los numerosos grupos armados que operan en
                    Colombia.
                  </p>
                  <button className="btn btn-dark"  onClick={handleClick1}>
                    Ver Más
                  </button>
                </div>
              </div>

              <div className="carousel-item">
                <img src={orgullo} className="d-block w-100" alt="..." />
                <div className="carousel-caption">
                  <h3>LGTBIQ+ Terminología de la diversidad</h3>
                  <p>
                    La diversidad es una característica fundamental de la
                    sociedad que somos y en la que hemos evolucionado.
                  </p>
                  <button className="btn btn-dark" onClick={handleClick2}>
                    Ver Más
                  </button>
                </div>
              </div>

              <div className="carousel-item">
                <img src={ambiental} className="d-block w-100" alt="..." />
                <div className="carousel-caption">
                  <h3>
                    24 propuestas de Gustavo Petro para el medioambiente en
                    Colombia
                  </h3>
                  <p>
                    “Seremos un gobierno de la vida que quiere construir a
                    Colombia como una potencia mundial de la vida. Esto consiste
                    en la paz. Segundo, en la justicia social y; tercero, en la
                    justicia ambiental”.
                  </p>
                  <button className="btn btn-dark" onClick={handleClick3}>
                    Ver Más
                  </button>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>

              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/*2 parte*/}
      <div className="row">
        <div className="col-lg-4" id="aside">
          <div className="sticky-top" style={{ top: "1rem" }}>
            <div className="p-4 mb-3 bg-light rounded">
              <h4 id="tituloK">¿Qué es la paz?</h4>
              <p className="mb-0" id="parrafok">
                La paz es un estado de armonía y tranquilidad que se logra a
                través del respeto mutuo, la resolución pacífica de conflictos y
                la ausencia de violencia.
              </p>
            </div>
            <div className="p-2">
              <h4 id="titulom">Fuentes adicionales</h4>
              <ol className="list-unstyled mb-0">
                <li>
                  <a href="https://www.cancilleria.gov.co/newsroom/news/semana-paz-memoria">
                    Semana por la Paz y la Memoria
                  </a>
                  <hr />
                </li>
                <li>
                  <a href="https://elpais.com/america-colombia/2023-04-30/jorge-mantilla-colombia-lleva-tres-decadas-construyendo-la-paz-total.html">
                    Jorge Mantilla: “Colombia lleva tres décadas construyendo la
                    paz total”
                  </a>
                  <hr />
                </li>
                <li>
                  <a href="https://bogota.gov.co/mi-ciudad/bogota-en-historias/lanzamiento-del-libro-letras-por-la-paz-en-la-feria-del-libro-2023">
                    Te invitamos a leer 'Letras por la paz', un ejercicio de
                    memoria desde el arte
                  </a>
                  <hr />
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
     
      </div>
      <CompFooter/>
    </div>
  );
}
export default Culturaypaz;
