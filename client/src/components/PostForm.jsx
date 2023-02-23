import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import '../Styles/PostForm.css'

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
    await axios.post(`/api/post`, formState)
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
        <option>Please Select</option>
        <option value="1 - Meh">1 - Meh</option>
        <option value="2 - I've seen worse">2 - I've seen worse</option>
        <option value="3 - This is bad.">3 - This is bad.</option>
        <option value="4 - Who approved this?">4 - Who approved this?</option>
        <option value="5 - An abomination">5 - An abomination!</option>
      </select>
      <button type="submit">Submit</button>
      {/* <button type="submit">Submit</button> */}
    </form>
  )
}

export default PostForm
