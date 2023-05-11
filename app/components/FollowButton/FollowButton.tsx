import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/app/lib/prisma'
import FollowClient from './FollowClient'

type Props = {
	targetUserId: string
}

const FollowButton = async ({ targetUserId }: Props) => {
	const session = await getServerSession(authOptions)
	const currentUserEmail = session?.user?.email!
	const userId = await prisma.user
		.findUnique({
			where: {
				email: currentUserEmail,
			},
		})
		.then((user) => user?.id!)

	// const follow = await prisma.follows.findUnique({
	// 	where: {
	// 		followerId_followingId: {
	// 			followerId: userId,
	// 			followingId: targetUserId,
	// 		},
	// 	},
	// })

	const isFollowing = await prisma.follows.findFirst({
		where: {
			followerId: userId,
			followingId: targetUserId,
		},
	})

	return (
		// double bang converts something to boolean value
		<FollowClient targetUserId={targetUserId} isFollowing={!!isFollowing} />
	)
}

export default FollowButton
