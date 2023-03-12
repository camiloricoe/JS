import { useState } from 'react'
import './App.css'
import { Turns } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import {Square} from './components/Square.jsx'



function App() {
  
  const [board ,setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(Turns.X)
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(Turns.X)
    setWinner(null)
  }


  const updateBoard = (index) => {

    if (board[index] || winner) return

    const newBoard =[...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === Turns.X ? Turns.O : Turns.X
    setTurn(newTurn)

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }



  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_, index)=> {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}>
                  {board[index]}
                </Square>
            )
          })


        }
      </section>

      <section className='turn'>
        <Square isSelected = {turn=== Turns.X}>{Turns.X}</Square>
        <Square isSelected = {turn=== Turns.O}>{Turns.O}</Square>
      </section>

      {
        winner !== null && (
          <section className='winner'>
          <div className='text'>
            <h2>{winner === false ? 'Empate' : 'Ganó:'}</h2>

            <header className='win'>
              {winner && <Square>{winner}</Square>}
            </header>

            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </div>
    </section>




        ) 
      }


    </main>
  
  
  )
}

export default App
