import Gallery from '../Gallery/Gallery'
import movieData from '../sampleData';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState(movieData.movies);
  const [selectedMovie, setSelectedMovie] = useState('');

  const selectMovie = (id) => {
    setSelectedMovie(id)
  }

  // use find to select the desired movie object from the movies array
  // pass object to movie component
  // in movie component, render all movie details

  return (
    <>
      <h1>Rancid Tomatillos</h1>
      {/* conditional: selectedMove && One Movie component */}
      {/* when home button is clicked, reset selectedMovie to falsy? */}
      {selectedMovie ? <h3>{selectedMovie}</h3> : <Gallery movies={movies} selectMovie={selectMovie} />}
    </>
  )
}

export default App;
