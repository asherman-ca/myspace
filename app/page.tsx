'use client'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

export default function Home() {
	return (
		<main>
			main
			<div onClick={() => signIn('github')}>signin</div>
		</main>
	)
}
