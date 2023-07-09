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

// when a card is clicked, a function in Card is run that captures the id of the event target
// the function must live in App so that Movie can gain access to the id
// run a function that passes the id through the api call and returns a movie object

