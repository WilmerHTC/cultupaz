import React from "react";
import imgCuiz from "../../assets/img/Cuiz.png";
import imgParejas from "../../assets/img/parejas.png";

import "../../assets/css/Juegos.css";

function Juegos() {
  return (
    <div>
      <div className="container text-center arreglo4" >
      <h1 className="color_juegos ">Juegos interactivos</h1>
      </div>
      <div className="containerj">
        <div className="card mb-3 juego1">
          <div className="card-body text-center">
            <h5 className="card-title">QUIZ</h5>
            <img src={imgCuiz} alt="imgCuiz" className="imgCuiz"></img>
            <p className="card-text">Veamos que tanto sabes sobre la paz</p>
            <a href="/aprendiz/Quiz" className="btn btn-primary botonesjuegos botonesjuegos2">
              <h4 className="textbtngamer" >¡JUEGA AHORA!</h4>
            </a>
          </div>
          <div>
          </div>
        </div>

        <div className="card mb-3 juego2">
          <div className="card-body text-center">
            <h5 className="card-title">ENCUENTRA LA PAREJA</h5>
            <img src={imgParejas} alt="imgParejas" className="imgParejas"></img>


            <p className="card-text">
              Veamos que tan hábil eres buscando las parejas.
            </p>

            <a href="/aprendiz/Parejas" className="btn btn-primary botonesjuegos  ">
              <h4 className="textbtngamer" >¡JUEGA AHORA!</h4>
            </a>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Juegos;
