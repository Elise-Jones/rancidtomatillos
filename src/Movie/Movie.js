import "./Movie.css";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSelectedMovieData } from "../apiCalls";

const Movie = ({ setError}) => {
  const movieID = useParams().id;
  const [selectedMovie, setSelectedMovie] = useState("");

  const selectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  useEffect(() => {
    getSelectedMovieData(movieID)
      .then((data) => selectMovie(data.movie))
      .catch((error) => setError(error));
  }, []);

  const formatDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(selectedMovie.release_date);
    const month = months[date.getMonth() - 1];
    return `${month} ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <main>
      <div className="main-overlay">
        <Link to="/">
          <button>
            <span className="material-icons-round">arrow_back</span>Go Back
          </button>
        </Link>
        <h2 className="title">~{selectedMovie.title}~</h2>
        <h3 className="tagline">{selectedMovie.tagline}</h3>
        <section className="movie-details-container">
          <img className="movie-image" src={selectedMovie.poster_path} />
          <div className="movie-details">
            <p>{selectedMovie.overview}</p>
            <p>🍅 Rating: {selectedMovie.average_rating}/10</p>
            <p>Genres: {selectedMovie.genres}</p>
            <p>Release Date: {formatDate()}</p>
            <p>Runtime: {selectedMovie.runtime} min</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Movie;

Movie.propTypes = {
  setError: PropTypes.func,
};
