import React from 'react'

function About() {
	const containerStyle = {
		fontFamily: 'Arial, sans-serif',
		backgroundColor: '#e0e0e0',
		color: '#333',
		padding: '20px',
		lineHeight: '1.6',
	}

	const headerStyle = {
		textAlign: 'center',
		color: '#111',
		marginBottom: '20px',
	}

	const sectionStyle = {
		backgroundColor: '#f8f8f8',
		padding: '20px',
		borderRadius: '10px',
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
		marginBottom: '20px',
	}

	const sectionHeaderStyle = {
		color: '#111',
		marginBottom: '10px',
	}

	const textStyle = {
		marginBottom: '15px',
	}

	const imageStyle = {
		display: 'block',
		margin: '0 auto 20px',
		maxWidth: '100%',
		borderRadius: '10px',
	}
	return (
		<div style={containerStyle}>
			<h1 style={headerStyle}>О нас</h1>
			<div style={sectionStyle}>
				<h2 style={sectionHeaderStyle}>Наша миссия</h2>
				<p style={textStyle}>
					Наша компания стремится предоставлять лучшие услуги и продукты для
					наших клиентов. Мы верим, что качество и внимание к деталям являются
					ключевыми компонентами успеха.
				</p>
			</div>
			<div style={sectionStyle}>
				<h2 style={sectionHeaderStyle}>Наша команда</h2>
				<img
					src='https://via.placeholder.com/600x400'
					alt='Наша команда'
					style={imageStyle}
				/>
				<p style={textStyle}>
					Мы гордимся нашей командой профессионалов, которая работает каждый
					день, чтобы удовлетворить потребности наших клиентов и превзойти их
					ожидания.
				</p>
			</div>
			<div style={sectionStyle}>
				<h2 style={sectionHeaderStyle}>Контакты</h2>
				<p style={textStyle}>
					Если у вас есть вопросы или предложения, пожалуйста, свяжитесь с нами
					по электронной почте{' '}
					<a href='mailto:info@company.com'>info@company.com</a>.
				</p>
			</div>
		</div>
	)
}

export default About
