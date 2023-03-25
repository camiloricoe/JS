import withResutls from '../mocks/with-results.json'
import noResutls from '../mocks/no-results.json'

export function useMovies() {
  const movies = withResutls.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: mappedMovies }
}