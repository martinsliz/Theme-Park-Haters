import { Link } from 'react-router-dom'
import '../Styles/ParkCard.css'

const ParkCard = (props) => {
  return (
    <div className="park-card">
      <div className="parkcard-img-container">
        <img className="card--image" src={props.image} alt="Theme Park" />
      </div>
      <div className="card--details">
        <h2 className="card--name">{props.name}</h2>
        <h3 className="card--location">in {props.location}</h3>
        <Link to={`/parks/${props._id}`}>
          <button className="card--button" type="button">
            More info
          </button>
        </Link>
      </div>
    </div>
  )
}
export default ParkCard
