import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/ParkDetails.css'
import axios from 'axios'
import Post from './Post'

const ParkDetails = () => {
  const [parkDetails, setParkDetails] = useState([])

  let { id } = useParams()

  const getParkDetails = async () => {
    const response = await axios.get(`/api/parks/${id}`)
    setParkDetails(response.data.park)
    console.log(response.data)
  }
  useEffect(() => {
    getParkDetails()
  }, [])

  return (
    <div>
      <section className="imageContainer">
        <img className="detail--image" src={parkDetails.image} alt="" />
        <div className="info">
          <h2 className="name">{parkDetails.name} </h2>
          <h4 className="location">{parkDetails.location} </h4>
          <h3>Description: {parkDetails.rating} </h3>
        </div>
      </section>
      <section>
        <Post />
      </section>
    </div>
  )
}

export default ParkDetails
