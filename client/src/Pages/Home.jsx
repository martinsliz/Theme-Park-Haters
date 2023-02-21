import Parks from "./Parks"
import seasideFire from "../Images/seasideFire.jpeg"

const Home = () => {
  return (
    <>
    <div>
        Welcome to the most hated theme parks!
    </div>
    <div>
        <img src={seasideFire} alt="" />
    </div>
    <Parks />
    </>
  )
}
export default Home