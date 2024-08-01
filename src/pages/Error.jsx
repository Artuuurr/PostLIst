import React from 'react'

function Error() {
	return (
		<div style={{ display: 'flex', alignItems: 'baseline', marginTop: 30 }}>
			<h1 style={{ color: '#ff0000dd' }}>Error: </h1>
			<h2>Вы перешли на несуществующую страницу!</h2>
		</div>
	)
}

export default Error
