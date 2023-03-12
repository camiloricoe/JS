import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const Turns ={
  X: 'x',
  O: 'o'
}


const Square = ({children, isSelected, updateBoard, index}) => {
  
  const className = `square ${isSelected ? 'is-selected':'' }`
  
  const handleClick = ()=> {
    updateBoard(index)
  }
  
  
  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  ) }


function App() {
  
  const [board ,setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(Turns.X)
  const [winner, setWinner] = useState(null)


  const updateBoard = (index) => {

    if (board[index]) return

    const newBoard =[...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === Turns.X ? Turns.O : Turns.X
    setTurn(newTurn)

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


    </main>
  
  
  )
}

export default App
