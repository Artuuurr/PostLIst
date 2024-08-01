import React, { useEffect, useRef, useState } from 'react'
import PostService from '../API/PostService'
import PostFilter from '../components/PostFilter'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import DefButton from '../components/UI/button/DefButton'
import Loader from '../components/UI/Loader/Loader'
import MyModal from '../components/UI/Modal/MyModal'
import Pagination from '../components/UI/Pagination/Pagination'
import { useFetching } from '../hooks/useFetching'
import { usePosts } from '../hooks/usePosts'
import { getPageCount } from '../utils/pages'
import DefSelect from '../components/UI/select/DefSelect'

function Posts() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page)
		setPosts(response.data)
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))
	})

	useEffect(() => {
		fetchPosts()
	}, [page, limit])

	const createPost = newPost => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const changePage = page => {
		setPage(page)
	}

	const maxId = posts.length > 0 ? Math.max(...posts.map(u => u.id)) : 0
	const number = maxId + 1

	return (
		<div className='App'>
			<DefButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
				Создать пост
			</DefButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} id={number} />
			</MyModal>
			<hr style={{ margin: '15px 0' }}></hr>
			<PostFilter filter={filter} setFilter={setFilter} />
			<DefSelect
				value={limit}
				onChange={value => setLimit(value)}
				defaultValue='Кол-во элементов на странице'
				options={[
					{ value: 5, name: '5' },
					{ value: 10, name: '10' },
					{ value: 25, name: '25' },
					{ value: -1, name: 'Показать все' },
				]}
			/>
			{postError && <h1>Error ${postError}</h1>}
			{isPostsLoading && (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: '50px',
					}}
				>
					<Loader />
				</div>
			)}
			<PostList
				remove={removePost}
				posts={sortedAndSearchPosts}
				title={'Список постов'}
			/>
			<Pagination page={page} changePage={changePage} totalPages={totalPages} />
		</div>
	)
}

export default Posts
