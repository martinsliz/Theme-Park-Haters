import Parks from './Parks'
import seasideFire from '../Images/seasideFire.jpeg'
import '../Styles/Home.css'

const Home = () => {
  return (
    <>
      <div className="home">Welcome to the most hated theme parks!</div>
      <div>
        <img src={seasideFire} alt="" />
      </div>
      <Parks />
    </>
  )
}
export default Home
