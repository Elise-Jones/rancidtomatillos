import Gallery from '../Gallery/Gallery'
import Movie from '../Movie/Movie'
import movieData from '../sampleData';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState(movieData.movies);
  const [selectedMovie, setSelectedMovie] = useState('');

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
