import { useState } from 'react'

const PostForm = () => {
  const initialState = {
    name: '',
    content: '',
    rating: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {}

  return <div>PostForm</div>
  export default PostForm
}
