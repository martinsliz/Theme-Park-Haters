import axios from 'axios'
import { BASE_URL } from '../globals'
import '../Styles/PostCard.css'

const PostCard = (props) => {
  const deletePost = async (postid) => {
    await axios.delete(`${BASE_URL}/posts/${postid}`)
    props.getPost()
  }

  return (
    <div className="post-card">
      <h4>Name: {props.name}</h4>
      <h4>Hater Rating: {props.rating}</h4>
      <h4>Comments: {props.content}</h4>
      <button onClick={() => deletePost(props._id)}>Delete</button>
    </div>
  )
}
export default PostCard
