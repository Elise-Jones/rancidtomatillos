import './Card.css'

const Card = ({ title, rating, image, id, selectMovie}) => {
  return (
    <article>
      <img src={image} className="card-image" />
      <div className="card-details">
        <h3 id={id} onClick={(event) => selectMovie(event.target.id)}>{title}</h3>
        <p>{rating}</p>
      </div>
    </article>
  ) 
}

export default Card