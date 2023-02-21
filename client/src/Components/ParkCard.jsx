const ParkCard = (props) => {
  return (
    <div>
        <h4>{props.title}</h4>
        <h4>{props.image}</h4>
        <h4>{props.location}</h4>
        <h4>{props.ratings}</h4>
        <h4>{props.isOpen}</h4>
    </div>
  )
}
export default ParkCard