const Card = ({ title, rating, image, id}) => {
  return (
    <article>
      <img src={image}/>
      <div>
        <h3>{title}</h3>
        <p>{rating}</p>
      </div>
    </article>
  ) 
}

export default Card