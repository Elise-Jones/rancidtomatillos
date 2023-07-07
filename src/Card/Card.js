import './Card.css'

const Card = ({ title, rating, image, id}) => {
  return (
    <article>
      <img src={image} className="card-image" />
      <div className="card-details">
        <h3>{title}</h3>
        <p>{rating}</p>
      </div>
    </article>
  ) 
}

export default Card