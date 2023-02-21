import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import Post from "./Post"

const ParkDetails = () => {
  const [parkDetails, setParkDetails] = useState([])

  let { id } = useParams()

  const getParkDetails = async () => {
    const response = await axios.get(`${BASE_URL}/parks/${id}`)
    setParkDetails(response.data.park)
    console.log(response.data)
  }
  useEffect(() => {
    getParkDetails()
  }, [])

  return (
    <div>
      <section className="imageContainer">
        <img src={parkDetails.image} alt="" />
        <div className="info">
          <h3>Name: {parkDetails.name} </h3>
          <h3>Location: {parkDetails.location} </h3>
          <h3>Rating: {parkDetails.rating} </h3>
          <h3>Open: {parkDetails.open} </h3>
        </div>
      </section>
      <section>
        <Post />
      </section>
    </div>
  )
}

export default ParkDetails
