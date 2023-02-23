import axios from 'axios'
import '../Styles/PostCard.css'

const PostCard = (props) => {
  const deletePost = async (postid) => {
    await axios.delete(`/api/posts/${postid}`)
    props.getPost()
  }

  return (
    <div className="post-card">
      <h4 className="haterName">Name: {props.name}</h4>
      <h4 className="haterName">Hater Rating: {props.rating}</h4>
      <h4 className="haterName">Comments: {props.content}</h4>
      <button onClick={() => deletePost(props._id)}>Delete</button>
    </div>
  )
}
export default PostCard
