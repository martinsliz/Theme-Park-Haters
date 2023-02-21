const ParkCard = (props) => {
  return (
    <div>
        <h4>{props.title}</h4>
        <img src={props.image} alt="image of Theme Park" />
        <h4>{props.location}</h4>
        <h4>{props.ratings}</h4>
        <h4>{props.isOpen}</h4>
    </div>
  )
}
export default ParkCard