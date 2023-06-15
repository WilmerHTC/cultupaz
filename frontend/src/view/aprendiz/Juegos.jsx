import React from "react";
import imgCuiz from "../../assets/img/Cuiz.png";
import imgParejas from "../../assets/img/parejas.png";

import "../../assets/css/Juegos.css";

function Juegos() {
  return (
    <div className="containerj">
      <div className="card mb-3 juego1">
        <img src={imgCuiz} alt="imgCuiz" className="imgCuiz"></img>
        <div className="card-body text-center">
          <h5 className="card-title">QUIZ</h5>
          <p className="card-text">Vamos a ver que tanto sabes sobre la paz.</p>
          <a href="/aprendiz/Quiz" className="btn btn-primary botonesjuegos">
          <h4 className="textbtngamer" >JUEGA AHORA</h4>
          </a>
        </div>
        <div>
          <h1>GAME</h1>
        </div>
      </div>

      <div className="card mb-3 juego2">
        <img src={imgParejas} alt="imgParejas" className="imgParejas"></img>
        <div className="card-body text-center">
          <h5 className="card-title">ENCUENTRA LA PAREJA</h5>
          <p className="card-text">
            VEAMOS QUE TAN HABIL ERES BUSCANDO LAS PAREJAS
          </p>
          <a href="/aprendiz/Parejas" className="btn btn-primary botonesjuegos">
            <h4 className="textbtngamer" >JUEGA AHORA</h4>
          </a>
        </div>
        <div>
          <h1>START</h1>
        </div>
      </div>
    </div>
  );
}
export default Juegos;
