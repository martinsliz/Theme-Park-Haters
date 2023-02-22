import axios from 'axios'
import { BASE_URL } from '../globals'

const PostCard = (props) => {
  const deletePost = async (postid) => {
    await axios.delete(`${BASE_URL}/posts/${postid}`)
    props.getPost()
  }

  return (
    <div className="post-card">
      <h4>{props.name}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.content}</h4>
      <button onClick={() => deletePost(props._id)}>Delete</button>
    </div>
  )
}
export default PostCard
