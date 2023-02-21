import React from "react"
import { useEffect, useState } from "react"
import { BASE_URL } from "../globals"
import { useParams, Link } from "react-router-dom"
import PostCard from "./PostCard"

const Post = () => {
	const [posts, setPosts] = useState([])

  let { id } = useParams()

	const getPost = async () => {
		// const res = await axios.get(`${BASE_URL}`)
		console.log("hey")
	}

	useEffect(() => {
		getPost()
	}, [])

	return (
		<>
			<div className="post-container">
				{posts &&
					posts.map((post) => <PostCard {...post} key={post._id} />)}
			</div>
			<div>
				<Link to={`/park/${id}/post`}>
					<button className="card--button" type="button">
						Post
					</button>
				</Link>
			</div>
		</>
	)
}

export default Post
