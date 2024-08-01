import React from 'react'
import classes from './DefInput.module.css'

function DefInput({ children, ...props }) {
	return <input {...props} className={classes.defInput} />
}

export default DefInput
