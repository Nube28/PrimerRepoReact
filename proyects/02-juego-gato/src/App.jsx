import { Children, useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const POSITION = {
  Winner: 'Winner',
  Loser: 'Loser'
}

const Square = ({children, isSelected, updateBoard, index }) =>{
  const className = `square ${isSelected ? 'is-selected' : ''}`
  
  const handleClick = () => {
    updateBoard(index)
  }

  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )
  
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinener] = useState(POSITION)

  const checkWinner = (boardToCheck, index) => {
    if (index%2 == 0 && index != 4){
      if(boardToCheck[index] == boardToCheck[index+1] && boardToCheck[index] == boardToCheck[index+2]){
        //funciona para el 6 y 0 derecha
        console.log('Ganaste con la linea de arriba o abajo')
        return boardToCheck[index]
      }
      else if(boardToCheck[index] == boardToCheck[index+3] && boardToCheck[index] == boardToCheck[index+6]){
        //funciona para el 2 y 0 abajo
        console.log('Ganaste con la linea de la derecha o izq')
        return boardToCheck[index]
      }
    }
    else if(index == 4){
      if(boardToCheck[index] == boardToCheck[index-3] && boardToCheck[index] == boardToCheck[index+3]){
        //funciona para el 4 para arriba y abajo
        console.log('Ganaste con la linea del centro vertical')
        return boardToCheck[index]
      }
      else if(boardToCheck[index] == boardToCheck[index-1] && boardToCheck[index] == boardToCheck[index+1]){
        //funciona para el 4 para derecha y izquierda
        console.log('Ganaste con la linea del centro horizontal')
        return boardToCheck[index]
      }
      if(boardToCheck[index] == boardToCheck[index-4] && boardToCheck[index] == boardToCheck[index-4]){
        //funciona para el 4 para diagonal
        console.log('Ganaste con la diagonal flup')
        return boardToCheck[index]
      }
      else if(boardToCheck[index] == boardToCheck[index-2] && boardToCheck[index] == boardToCheck[index+2]){
        //funciona para el 4 para digonal
        console.log('Ganaste con la diagonal /')
        return boardToCheck[index]
      }
    }
    else{
      return null
    }
  }

  const updateBoard = (index) => {
    if(board[index]) return

    const newBoard  = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newWinner = checkWinner(newBoard, index)

    if(newWinner){
      console.log('new Winner')
    }

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

  }

  return (
    <main className='board'>
      <h1> El juego del gato </h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App
