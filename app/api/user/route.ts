import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/app/lib/prisma'
import { authOptions } from '../auth/[...nextauth]/route'

export async function PUT(req: Request) {
	const session = await getServerSession(authOptions)
	const currentUserEmail = session?.user?.email!

	const data = await req.json()
	data.age = Number(data.age)

	// in a production environment you'd want to validate the shape of data right here and on the client
	// something like this:
	// if (typeof data.name !== 'number') {
	// 	return NextResponse.json(
	// 		{ error: 'Name must be a string' },
	// 		{ status: 400 }
	// 	)
	// }

	const user = await prisma.user.update({
		where: {
			email: currentUserEmail,
		},
		data,
	})

	return NextResponse.json(user)
}
