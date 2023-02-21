import axios from 'axios'
import { useState } from 'react'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'

const PostForm = (props) => {
  const initialState = {
    name: '',
    content: '',
    rating: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault(event)
    await axios.post(`${BASE_URL}`, formState)
    setFormState(initialState)
    navigate('/parks/:id')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        onChange={handleChange}
        value={formState.name}
      />
      <label htmlFor="content">Content:</label>
      <input
        type="text"
        id="content"
        onChange={handleChange}
        value={formState.content}
      />
      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        id="rating"
        onChange={handleChange}
        value={formState.rating}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default PostForm
