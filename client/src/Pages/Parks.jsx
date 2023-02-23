import { useState, useEffect } from "react"
import axios from "axios"
import ParkCard from "../Components/ParkCard"
import "../Styles/Parks.css"

const Parks = () => {

    const [parks, setParks] = useState([])

    const getAllParks = async () => {
        const res = await axios.get(`/api/parks`)
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