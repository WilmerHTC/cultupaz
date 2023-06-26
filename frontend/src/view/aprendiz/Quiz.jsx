import React, { useState } from "react";
import "../../assets/css/Juegos.css"

      function GameQuiz() {
        // Properties
        const [showResults, setShowResults] = useState(false);
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [score, setScore] = useState(0);
      
        const questions = [
          {
            text: "1.¿Qué es la PAZ TOTAL?",
            options: [
              { id: 0, text: "Un concepto creado por Gustavo Petro para convertir la búsqueda de la paz en una política de Estado.", isCorrect: true },
              { id: 1, text: "Una estrategia militar para derrotar a grupos armados ilegales en Colombia.", isCorrect: false },
              { id: 2, text: "Una campaña publicitaria del gobierno colombiano para mejorar su imagen.", isCorrect: false },
            ],
          },
          {
            text: "2.¿Qué es el esfuerzo de paz total en Colombia?",
            options: [
              { id: 0, text: "Un programa de educación para niños", isCorrect: true },
              { id: 1, text: "Una estrategia multifacética para poner fin a la violencia en Colombia", isCorrect: false },
            ],
          },
          {
            text: "3.¿Quién anunció el esfuerzo de paz total?",
            options: [
              { id: 0, text: "El presidente saliente de Colombia", isCorrect: false },
              { id: 1, text: "El presidente recién investido de Colombia, Gustavo Petro", isCorrect: true },
              { id: 2, text: "El ex presidente Juan Manuel Santos", isCorrect: false },
            ],
          },
          {
            text: "4.¿Qué busca el esfuerzo de paz total?",
            options: [
              { id: 0, text: "Aumentar la violencia en Colombia", isCorrect: false },
              { id: 1, text: "Minimizar la violencia, proteger a los civiles y desmantelar los grupos armados en Colombia", isCorrect: true },
            ],
          },
          {
            text: "5.¿Cuándo se anunció el esfuerzo de paz total?",
            options: [
              { id: 0, text: "El 7 de agosto de 2021", isCorrect: false },
              { id: 1, text: "El 7 de agosto de 2022", isCorrect: false },
              { id: 2, text: "El 7 de agosto de 2023", isCorrect: true },
            ],
          },
          {
            text: "6.¿Qué se tiene en cuenta en el esfuerzo de paz total?",
            options: [
              { id: 0, text: "Las lecciones de un programa de televisión", isCorrect: false },
              { id: 1, text: "Las lecciones aprendidas de los procesos de paz y sometimiento del país", isCorrect: true },
              { id: 2, text: "Las lecciones de un programa de entrenamiento militar", isCorrect: false },
            ],
          },
          {
            text: "7.¿Qué es La Paz Total?",
            options: [
              { id: 0, text: "Un tratado internacional de derechos humanos", isCorrect: false },
              { id: 1, text: "Una política gubernamental para promover la seguridad alimentaria", isCorrect: false },
              { id: 2, text: "Un esfuerzo para alcanzar la paz y el cese del conflicto armado en Colombia", isCorrect: true },
            ],
          },
          {
            text: "8.¿Quién informó que diez grupos ilegales se han sumado al cese del fuego para alcanzar La Paz Total?",
            options: [
              { id: 0, text: "El presidente de Colombia", isCorrect: false },
              { id: 1, text: "El comisionado de Paz de Colombia", isCorrect: true },
              { id: 2, text: "Un líder de la oposición en Colombia", isCorrect: false },
            ],
          },
        ];
      
        // Helper Functions
      
        /* A possible answer was clicked */
        const optionClicked = (isCorrect) => {
          // Increment the score
          if (isCorrect) {
            setScore(score + 1);
          }
      
          if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
          } else {
            setShowResults(true);
          }
        };
      
        /* Resets the game back to default */
        const restartGame = () => {
          setScore(0);
          setCurrentQuestion(0);
          setShowResults(false);
        };
      
        return (
          <div className="App container">
      

            {/* 1. Header  */}
            <h1>Quiz sobre PAZ</h1>
            <h2>Veamos que tanto sabes sobre la paz :D</h2>
            
      
            {/* 2. Current Score  */}
            <h2 className="color_juegos ">Puntaje: {score}</h2>
      
            {/* 3. Show results or show the question game  */}
            {showResults ? (
              /* 4. Final Results */
              <div className="final-results">
                <h1>Resultado Final</h1>
                <h2>
                  {score} de {questions.length} correctas - (
                  {(score / questions.length) * 100}%)
                </h2>
                <button className="button-restartgame" onClick={() => restartGame()}>Reiniciar juego</button>
                <a href="/Aprendiz/Juegos" className="button-restartgame">Volver</a>
              </div>
            ) : (
              /* 5. Question Card  */
              <div className="question-card">
                {/* Current Question  */}
                <h2>
                  Pregunta: {currentQuestion + 1} de {questions.length}
                </h2>
                <h3 className="question-text">{questions[currentQuestion].text}</h3>
      
                {/* List of possible answers  */}
                <ul>
                  {questions[currentQuestion].options.map((option) => {
                    return (
                      <li className="optionn"
                        key={option.id}
                        onClick={() => optionClicked(option.isCorrect)}
                      >
                        {option.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            <h2>En la parte de Cultura y Paz encontraras informacion con la cual se </h2>
                <h2>te facilitara responder las preguntas</h2>
          </div>
          
        );
      };
      
export default GameQuiz;
      
      
