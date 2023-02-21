import { Link } from "react-router-dom"
import "../Styles/ParkCard.css"

const ParkCard = (props) => {
  return (
    <div className="park-card">
        <img className ="card--image"src={props.image} alt="image of Theme Park" />
        <h4>{props.name}</h4>
        <h4>{props.location}</h4>
        <h4>{props.ratings}</h4>
        <h4>{props.isOpen}</h4>
        <Link to={`/park/${props._id}`}>
            <button 
            className="card--button"
            type="button">More info</button>
        </Link>
    </div>
  )
}
export default ParkCard