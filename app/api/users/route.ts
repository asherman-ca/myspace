import { prisma } from '@/app/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const users = await prisma.user.findMany({
		select: {
			id: true,
			name: true,
			email: true,
			image: true,
		},
	})

	return NextResponse.json(users)
}
