import React, { useContext } from 'react'
import DefInput from '../components/UI/input/DefInput'

import AuthContext from '../context/Context'
import MyButton from '../components/UI/button/MyButton'

const Login = () => {
	const { setIsAuth } = useContext(AuthContext)
	const login = event => {
		event.preventDefault()
		setIsAuth(true)
		localStorage.setItem('auth', 'true')
	}
	const containerStyle = {
		fontFamily: 'Arial, sans-serif',
		backgroundColor: '#e0e0e0',
		color: '#333',
		padding: '40px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	}

	const formContainerStyle = {
		backgroundColor: '#f8f8f8',
		padding: '40px',
		borderRadius: '10px',
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
		maxWidth: '400px',
		width: '100%',
		textAlign: 'center',
	}

	const headerStyle = {
		color: '#111',
		marginBottom: '20px',
	}

	const inputStyle = {
		width: '100%',
		padding: '10px',
		marginBottom: '15px',
		borderRadius: '5px',
		border: '1px solid #ccc',
		fontSize: '16px',
	}

	const buttonStyle = {
		width: '100%',
		padding: '10px',
		backgroundColor: '#333',
		color: '#fff',
		border: 'none',
		borderRadius: '5px',
		fontSize: '16px',
		cursor: 'pointer',
	}

	return (
		<div style={containerStyle}>
			<div style={formContainerStyle}>
				<h1 style={headerStyle}>Страница для логина</h1>
				<form onSubmit={login}>
					<input type='text' placeholder='Введите логин' style={inputStyle} />
					<input
						type='password'
						placeholder='Введите пароль'
						style={inputStyle}
					/>
					<button type='submit' style={buttonStyle}>
						Войти
					</button>
				</form>
			</div>
		</div>
	)
}

export default Login
