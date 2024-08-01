import React, { useState } from 'react'
import DefButton from './UI/button/DefButton'
import DefInput from './UI/input/DefInput'

function PostForm({ create, id }) {
	const [post, setPost] = useState({ title: '', body: '' })

	const addNewPost = () => {
		const newPost = {
			...post,
			id: id,
		}
		create(newPost)
		setPost({ title: '', body: '' })
	}

	return (
		<form>
			<DefInput
				value={post.title}
				onChange={e => setPost({ ...post, title: e.target.value })}
				placeholder='Название поста'
			/>
			<DefInput
				value={post.body}
				onChange={e => setPost({ ...post, body: e.target.value })}
				placeholder='Описание'
			/>
			<DefButton onClick={addNewPost}>Создать пост</DefButton>
		</form>
	)
}

export default PostForm
