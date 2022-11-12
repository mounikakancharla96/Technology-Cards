import './index.css'

const Card = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`card ${className}`}>
      <div className="each-card">
        <h1 className="card-heading">{title}</h1>
        <p className="card-para">{description}</p>
        <img src={imgUrl} alt={title} className="card-image" />
      </div>
    </li>
  )
}

export default Card
