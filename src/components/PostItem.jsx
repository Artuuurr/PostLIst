import React from 'react'
import { useNavigate } from 'react-router-dom'
import DefButton from './UI/button/DefButton'

function PostItem({ post, number, remove }) {
	const router = useNavigate()

	return (
		<>
			<div className='post'>
				<div className='postContent'>
					<strong>
						{post.id}. {post.title}
					</strong>
					<div>{post.body}</div>
				</div>
				<div className='postBtns'>
					<DefButton onClick={() => router(`/posts/${post.id}`)}>
						Открыть
					</DefButton>
					<DefButton onClick={() => remove(post)}>Удалить</DefButton>
				</div>
			</div>
		</>
	)
}

export default PostItem
