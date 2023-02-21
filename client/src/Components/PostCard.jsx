
const PostCard = (props) => {

  return (
    <div className="post-card">
        <h4>{props.name}</h4>
        <h4>{props.rating}</h4>
        <h4>{props.content}</h4>
    </div>
  )
}
export default PostCard