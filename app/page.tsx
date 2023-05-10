import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Home() {
	const session = await getServerSession()
	console.log('seshun', session)

	if (!session) {
		redirect('/about')
	}

	return <main>main</main>
}
