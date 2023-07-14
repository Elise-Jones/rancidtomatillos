import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ title, rating, image }) => {
  return (
    <article>
      <img src={image} className="card-image" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <p className="card-rating">🍅 Rating: {rating}/10</p>
      </div>
    </article>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
