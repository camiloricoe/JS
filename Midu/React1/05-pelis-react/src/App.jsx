import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies'
import { useRef, useState, useEffect } from 'react'



const URL = 'https://www.omdbapi.com/?apikey=9ba86ce5&s=avengers'

function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstRender = useRef(true)


  useEffect(() => {

    if (isFirstRender.current) { //cuando cambia falso ya nunca mas lo vuelve a validar
      isFirstRender.current = search === ''
      return
    }

    if (search === '') {
      setError('No puedes buscar una peli vacia')
      return
    }

    if (search.length < 3) {
      setError('La consulta deber tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [search])


  return { search, setSearch, error }
}

function App() {
  const { movies } = useMovies()
  const inputRef = useRef()
  const { search, setSearch, error } = useSearch()


  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return // es una pre validacion no me deja escribir
    setSearch(event.target.value)
    // el estado se actualiza cada vez que cambia el valor del formulario
    // y el valor del search se pone como valor en el fomulario
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields);
    console.log(fields.peli);
    console.log({ search });
    console.log(search);
  }


  /*

    const handleSubmit = (event) => {
      event.preventDefault()
      const fields = Object.fromEntries(new window.FormData(event.target))
      console.log(fields);
      console.log(fields.peli);
  }

    const handleSubmit = (event) => {
      event.preventDefault()
      const fields = new window.FormData(event.target)
      const query = fields.get('peli')
      console.log(query);
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      const value = inputRef.current.value
      console.log(value);
    }
  */

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form action="" className='form' onSubmit={handleSubmit}>
          <input style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }} onChange={handleChange} value={search} name='peli' type="text" ref={inputRef} placeholder='Avengers, Star Wars, Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p className='error' style={{ color: 'red' }}> {error} </p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
