'use client'

import { useEffect } from 'react'

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
	useEffect(() => {
		console.log(error)
	}, [error])

	return (
		<div>
			<h2>An error has occured...</h2>
			<button onClick={() => reset()}>Try again</button>
		</div>
	)
}

export default error
