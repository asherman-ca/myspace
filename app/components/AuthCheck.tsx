'use client'

import { useSession } from 'next-auth/react'

type Props = {
	children: React.ReactNode
}

const AuthCheck = ({ children }: Props) => {
	const { data: session, status } = useSession()

	console.log(session, status)

	if (status === 'authenticated') {
		return <>{children}</>
	} else {
		return <div>You must be signed in to view this page</div>
	}
}

export default AuthCheck
