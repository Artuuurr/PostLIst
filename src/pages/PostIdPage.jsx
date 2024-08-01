import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'

function PostIdPage() {
	const params = useParams()
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])
	const [fetchPostById, isLoading, error] = useFetching(async () => {
		const response = await PostService.getById(params.id)
		setPost(response.data)
	})

	const [fetchComments, isComLoading, comError] = useFetching(async () => {
		const response = await PostService.getCommentsByPostID(params.id)
		setComments(response.data)
	})

	useEffect(() => {
		fetchPostById(params.id)
		fetchComments(params.id)
	}, [])

	const postStyle = {
		backgroundColor: '#f8f8f8',
		color: '#333',
		padding: '20px',
		borderRadius: '10px',
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
		marginBottom: '20px',
	}

	const commentStyle = {
		backgroundColor: '#ffffff',
		color: '#333',
		padding: '15px',
		borderRadius: '5px',
		boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
		marginTop: '15px',
	}

	const emailStyle = {
		color: '#666',
		fontSize: '14px',
	}
	return (
		<div
			style={{
				fontFamily: 'Arial, sans-serif',
				padding: '20px',
				height: '100vh',
			}}
		>
			<h1 style={{ color: '#111' }}>
				Вы попали на страницу поста c ID = {params.id}
			</h1>
			{isLoading ? (
				<Loader />
			) : (
				<div style={postStyle}>
					<h2 style={{ marginBottom: '10px' }}>
						{post.id}. {post.title}
					</h2>
					<p>{post.body}</p>
				</div>
			)}
			<h1 style={{ color: '#111', marginTop: '30px' }}>Комментарии</h1>
			{isComLoading ? (
				<Loader />
			) : (
				<div>
					{comments.map(com => (
						<div key={com.id} style={commentStyle}>
							<h5 style={emailStyle}>{com.email}</h5>
							<div>{com.body}</div>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default PostIdPage
