import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square.jsx";
import {TURNS}  from "./constant.jsx";
import {checkWinnerFrom,checkEndGame} from "./logic/board.jsx";
import { WinnerModal } from "./components/WinnerModal.jsx";



function App() {
  
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn,setTurn] =useState(TURNS.X) //Creo un estado para saber de quien es el turno, le paso el valor inicial y me devuelve un array de dos posiciones
  const [winner,setWinner] = useState(null) //null es que no hay ganador, false es que hay empate



const resetGame=()=>{
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)
}


  const updateBoard=(index) =>{
    // No actualizo la posicion si ya tiene algo
    if (board[index] || winner) return
      //Actualizo el tablero
      const newBoard = [... board];//Hago estoporque no debo mutar las props y los estados.  Debo crear siempre un nuevo array en este caso con los valores
      newBoard[index]=turn
      setBoard(newBoard)
      //Cambio el turno
      const newTurn= turn == TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)

      //reviso si hay ganador
      const newWinner=checkWinnerFrom(newBoard)
      if (newWinner){
        confetti()
        setWinner(newWinner)
      }else if(checkEndGame(newBoard)){
        setWinner(false) //empate
      }
  }


  return (
    <main className="board">

      <h1>TaTeTi</h1>
      <button onClick={resetGame}>Comenzar de nuevo</button>

      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn ==TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn ==TURNS.O}>{TURNS.O}</Square>
      </section>


      <WinnerModal resetGame={resetGame} winner={winner}/>


    </main>
  )
}

export default App;
