import React from 'react'
import classes from './DefButton.module.css'

function DefButton({ children, ...props }) {
	return (
		<button {...props} className={classes.defBtn} type='button'>
			{children}
		</button>
	)
}

export default DefButton
