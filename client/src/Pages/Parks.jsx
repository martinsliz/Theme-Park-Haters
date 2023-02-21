import { useState, useEffect } from "react"
import axios from "axios"
import ParkCard from "../Components/ParkCard"
import { BASE_URL } from "../globals"

const Parks = () => {

    const [parks, setParks] = useState([])

    const getAllParks = async () => {
        const res = await axios.get(`${BASE_URL}/parks`)
        setParks(res.data.parks)
    }

    useEffect(() => {
        getAllParks()
    },[])

  return (
    <div className="parks-container">
        {parks && (
            parks.map(park => (
                <ParkCard {...park} key={park._id}/>
            ))
        )}
    </div>
  )

}
export default Parks