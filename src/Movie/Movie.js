import "./Movie.css";
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSelectedMovieData } from '../apiCalls'

const Movie = () => {
  const movieID = useParams().id;
  const [selectedMovie, setSelectedMovie] = useState('');

  const selectMovie = (movie) => {
    setSelectedMovie(movie)
    console.log('selectedmovie', selectedMovie)
  } 

  useEffect(() => {
    getSelectedMovieData(movieID)
    .then(data => selectMovie(data.movie))
  }, [])

  return (
    <main className="single-movie-container">
      <Link to='/'>
        <button>go back</button>
      </Link>
      <h2>{selectedMovie.title}</h2>
      <h3>{selectedMovie.tagline}</h3>
      <span>
        <img className="movie-image" src={selectedMovie.poster_path} />
        <div>
          <p>{selectedMovie.overview}</p>
          <p>{selectedMovie.average_rating}</p>
          <p>{selectedMovie.genres}</p>
          <p>{selectedMovie.release_date}</p>
          <p>{selectedMovie.runtime}</p>
          <p>{selectedMovie.budget}</p>
          <p>{selectedMovie.revenue}</p>
        </div>
      </span>
    </main>
  );
};

export default Movie;
