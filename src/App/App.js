import Gallery from '../Gallery/Gallery';
import Movie from '../Movie/Movie';
import movieData from '../sampleData';
import './App.css';
import { useState, useEffect } from 'react';
import { getMoviesData } from '../apiCalls';
import { Link, Routes, Route } from 'react-router-dom';

const App = () => {
  const [movies, setMovies] = useState(movieData.movies);
  
  useEffect(() => {
    getMoviesData()
      .then(data => setMovies(data.movies))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <header>
        <Link to='/'>
          <h1>Rancid Tomatillos</h1>
        </Link>
        <h2 className="subheader">Unleash Movie Magic 💫</h2>
      </header>
      <Routes>
        <Route path='/' element={<Gallery movies={movies} />} />
        <Route path='/:id' element={<Movie />} />
      </Routes>
    </>
  )
}

export default App