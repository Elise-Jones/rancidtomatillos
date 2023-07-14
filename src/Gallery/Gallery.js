import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './Gallery.css';
import { Link } from 'react-router-dom';

const Gallery = ( { movies } ) => {

  const movieCards = movies.map(movie => {
    return (
      <Link to={`${movie.id}`}>
        <Card
          title={movie.title}
          rating={movie.average_rating}
          image={movie.poster_path}
          // is this id needed?
          id={movie.id}
          key={movie.id}
        />
      </Link>
    )
  })

  return (
    <main className="gallery">
      <div className="main-overlay">
        <h2>~ What to Watch ~</h2>
        <section className="cards-container">
          {movieCards}
        </section>
      </div>
    </main>
  )
}

export default Gallery

Gallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}