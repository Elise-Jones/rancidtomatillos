import Gallery from '../Gallery/Gallery'
import Movie from '../Movie/Movie'
import movieData from '../sampleData';
import './App.css';
import { useState, useEffect } from 'react';
import { getMoviesData } from '../apiCalls'

const App = () => {
  const [movies, setMovies] = useState(movieData.movies);
  const [selectedMovie, setSelectedMovie] = useState('');

  useEffect(() => {
    getMoviesData()
      .then(data => setMovies(data.movies))
      .catch(error => console.log(error))
  }, [])

  const selectMovie = (id) => {
    setSelectedMovie(parseInt(id))
  }
  
  const movie = movies.find((movie) => { 
      return movie.id === selectedMovie
  })

  return (
    <>
      <h1 onClick={() => selectMovie('')}>Rancid Tomatillos</h1>
      {selectedMovie ? <Movie movie={movie} movies={movies} selectedMovie={selectedMovie} selectMovie={selectMovie}/> : <Gallery movies={movies} selectMovie={selectMovie} />}
    </>
  )
}

export default App
