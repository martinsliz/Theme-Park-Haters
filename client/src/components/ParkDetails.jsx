import { useState, usEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'

const ParkDetails = (props) => {
  // const [parkDetails, setParkDetails] = useState([])

  // let { id } = useParams()

  // const getParkDetails = async () => {
  //   const response = await axios.get(`${BASE_URL}/parks/:id`)
  //   setDetails(response.data)
  //   console.log(response)
  // }
  // getParkDetails()

  return <div>ParkDetails</div>
}

export default ParkDetails
