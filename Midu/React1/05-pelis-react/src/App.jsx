import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies'
import { useRef } from 'react'


const URL = 'https://www.omdbapi.com/?apikey=9ba86ce5&s=avengers'

function App() {

  const { movies } = useMovies()

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form action="" className='form'>
          <input type="text" placeholder='Avengers, Star Wars, Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
