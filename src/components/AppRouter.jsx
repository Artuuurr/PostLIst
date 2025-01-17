import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router/router'
import AuthContext from '../context/Context'
import Loader from './UI/Loader/Loader'

function AppRouter() {
	const { isAuth, isLoading } = useContext(AuthContext)

	if (isLoading) {
		return <Loader />
	}

	return isAuth ? (
		<Routes>
			{privateRoutes.map((route, index) => (
				<Route
					key={route.path}
					path={route.path}
					element={<route.component />}
				/>
			))}
			<Route path='*' element={<Navigate to='/posts' replace />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map((route, index) => (
				<Route
					key={route.path}
					path={route.path}
					element={<route.component />}
				/>
			))}
			<Route path='*' element={<Navigate to='/login' replace />} />
		</Routes>
	)
}

export default AppRouter
