import { Link } from "react-router-dom"

const ParkCard = (props) => {
  return (
    <div className="park-card">
        <h4>{props.title}</h4>
        <img src={props.image} alt="image of Theme Park" />
        <h4>{props.location}</h4>
        <h4>{props.ratings}</h4>
        <h4>{props.isOpen}</h4>
        <Link to={`/park/${props._id}`}>
            <button type="button">More info</button>
        </Link>
        
    </div>
  )
}
export default ParkCard