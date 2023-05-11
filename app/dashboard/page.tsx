import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { SignOutButton } from '../components/buttons'
import { redirect } from 'next/navigation'
import { prisma } from '@/app/lib/prisma'
import ProfileForm from './ProfileForm'

const page = async () => {
	const session = await getServerSession(authOptions)

	if (!session) {
		redirect('/api/auth/signin')
	}

	const currentUserEmail = session?.user?.email!
	const user = await prisma.user.findUnique({
		where: {
			email: currentUserEmail,
		},
	})

	return (
		<>
			<h1>Dashboard</h1>
			<SignOutButton />
			<ProfileForm user={user} />
		</>
	)
}

export default page
