import Parks from './Parks'
import seasideFire from '../Images/seasideFire.jpeg'
import abandoned from "../Images/abandoned.png"
import abandonedCoaster from "../Images/abandonedCoaster.jpeg"
import '../Styles/Home.css'

const Home = () => {
  return (
    <>
      <div className='header-photo-container' style={{backgroundImage: `url(${abandonedCoaster})`}}>
        <h1 className='header-text'>Welcome to the most hated theme parks</h1>
      </div>
      <Parks />
    </>
  )
}
export default Home
