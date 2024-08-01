import React from 'react'
import classes from './DefButton.module.css'

function MyButton({ children, ...props }) {
	return (
		<button {...props} className={classes.defBtn}>
			{children}
		</button>
	)
}

export default MyButton
