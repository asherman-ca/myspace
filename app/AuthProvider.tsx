'use client'

import { SessionProvider } from 'next-auth/react'

type Props = {
	children: React.ReactNode
}

const App = ({ children }: Props) => {
	return <SessionProvider>{children}</SessionProvider>
}

export default App
