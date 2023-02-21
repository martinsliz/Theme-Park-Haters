import { useState, useEffect } from "react"
import axios from "axios"
import ParkCard from "../Components/ParkCard"

const Parks = () => {

    const [parks, setParks] = useState([])

    const getAllParks = async () => {
        const res = axios.get(`/api/parks`)
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