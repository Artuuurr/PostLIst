import React from 'react'
import DefInput from './UI/input/DefInput'
import DefSelect from './UI/select/DefSelect'

function PostFilter({ filter, setFilter }) {
	return (
		<div>
			<div>
				<DefInput
					placeholder='Поиск...'
					value={filter.query}
					onChange={e => setFilter({ ...filter, query: e.target.value })}
				/>
				<DefSelect
					value={filter.sort}
					onChange={selectedSort =>
						setFilter({ ...filter, sort: selectedSort })
					}
					defaultValue='Сортировка'
					options={[
						{ value: 'title', name: 'По названию' },
						{ value: 'body', name: 'По описанию' },
					]}
				/>
			</div>
		</div>
	)
}

export default PostFilter
