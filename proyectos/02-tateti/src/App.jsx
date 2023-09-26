import { useState } from "react";
const TURNS = {
  X: 'X',
  O: 'O',
};

const Square = ({ children, isSelected,updateBoard, index }) => {
  const className=`square ${isSelected ? "is-selected" :''}`
  
  const handleClick =()  =>{
    updateBoard(index)
  }


  return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
};

const WINNER_COMBOS =[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn,setTurn] =useState(TURNS.X) //Creo un estado para saber de quien es el turno, le paso el valor inicial y me devuelve un array de dos posiciones
  const [winner,setWinner] = useState(null) //null es que no hay ganador, false es que hay empate

  const checkWinner = (boardToCheck) =>{
    // reviso todas las combinaciones ganadoras para ver si X u O ganó
    for (const combo of WINNER_COMBOS){
      const [a,b,c] =combo
      if (boardToCheck[a] && boardToCheck[a] ===boardToCheck[b] && boardToCheck[a] ==boardToCheck[c]  ){
        return boardToCheck[a] //devuelvo la posicion a
      }

    }
    //si no hay ganador no devuelvo nada
    return null
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
      const newWinner=checkWinner(newBoard)
      if (newWinner){
        setWinner(newWinner)
      }
  }


  return (
    <main className="board">

      <h1>TaTeTi</h1>

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

    </main>
  );
}

export default App;
