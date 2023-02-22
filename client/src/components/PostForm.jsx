import axios from 'axios'
import { useState } from 'react'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const PostForm = () => {
  let { id } = useParams()
  const initialState = {
    name: '',
    content: '',
    rating: '',
    park: id
  }
  const [formState, setFormState] = useState(initialState)

  let navigate = useNavigate()

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault(event)
    await axios.post(`${BASE_URL}/post`, formState)
    setFormState(initialState)
    navigate(`/parks/${id}`)
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
      <label htmlFor="content">Comments:</label>
      <input
        type="text"
        id="content"
        onChange={handleChange}
        value={formState.content}
      />
      <label htmlFor="rating">Rating:</label>
      <select id="rating" onChange={handleChange} value={formState.rating}>
        <option disabled>Please Select</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}

export default PostForm
