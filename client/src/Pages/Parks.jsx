import { useState, useEffect } from "react"
import axios from "axios"
import ParkCard from "../Components/ParkCard"
import { BASE_URL } from "../globals"

const Parks = () => {

    const [parks, setParks] = useState([])

    const getAllParks = async () => {
        const res = await axios.get(`${BASE_URL}/parks`)
        console.log(res)
        setParks(res)
    }

    useEffect(() => {
        getAllParks()
    },[])

  return (
    <div className="parks-container">
        {parks && (
            parks.map(park => {
                <ParkCard {...park}/>
            })
        )}
    </div>
  )
}
export default Parks