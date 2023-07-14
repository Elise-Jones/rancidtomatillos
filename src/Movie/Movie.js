import "./Movie.css";
import PropTypes from 'prop-types';
const Movie = ({ movie, selectMovie }) => {

  const formatDate = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const date = new Date(movie.release_date)
    const month = months[date.getMonth() - 1]
    return `${month} ${date.getDate()}, ${date.getFullYear()}`;
  }

  return (
    <main>
      <div className="main-overlay">
        <button onClick={() => selectMovie('')}><span class="material-icons-round">arrow_back</span>Go Back</button>
        <h2 className="title">~{movie.title}~</h2>
        <h3 className="tagline">{movie.tagline}</h3>
        <section className="movie-details-container">
          <img className="movie-image" src={movie.poster_path} />
          <div className="movie-details">
            <p>{movie.overview}</p>
            <p>🍅 Rating: {movie.average_rating}/10</p>
            <p>Genres: {movie.genres.map(genre => `${genre} ` )}</p>
            <p>Release Date: {formatDate()}</p>
            <p>Runtime: {movie.runtime} min</p>
            <p>Budget: ${movie.budget.toLocaleString()}</p>
            <p>Runtime: ${movie.revenue.toLocaleString()}</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Movie;

Movie.propTypes = {
  movie: PropTypes.object,
  selectMovie: PropTypes.func.isRequired
}