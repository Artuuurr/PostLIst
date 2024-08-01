import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DefButton from '../button/DefButton'
import AuthContext from '../../../context/Context'

function Navbar() {
	const { setIsAuth } = useContext(AuthContext)

	const logout = () => {
		setIsAuth(false)
		localStorage.removeItem('auth')
	}

	return (
		<div className='navbar'>
			<DefButton
				style={{ border: '1px solid white', color: 'white' }}
				onClick={logout}
			>
				Выйти
			</DefButton>
			<div className='navbar__links'></div>
			<Link to='/about' className='link'>
				О сайте
			</Link>
			<Link to='/posts' className='link'>
				Посты
			</Link>
		</div>
	)
}

export default Navbar
