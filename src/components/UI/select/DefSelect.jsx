import React from 'react'

function DefSelect({ options, defaultValue, value, onChange }) {
	return (
		<select
			style={{ margin: '5px 0' }}
			value={value}
			onChange={e => onChange(e.target.value)}
		>
			<option disabled value=''>
				{defaultValue}
			</option>
			{options.map(option => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	)
}

export default DefSelect
