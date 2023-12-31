import {WINNER_COMBOS}  from "../constant.jsx"

export const checkWinnerFrom = (boardToCheck) =>{
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


  export const checkEndGame=(newBoard)=>{
    return newBoard.every((square)=>square !==null)///Si todas las posiciones del square es diferente a null termino el juego
  }
  
  