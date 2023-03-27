import { serachMovies } from '../services/movies'
import { useState } from 'react'

export function useMovies({search}) {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const newMovies = await serachMovies({search})
    setMovies(newMovies)
  }
  
  return { movies, getMovies }
}