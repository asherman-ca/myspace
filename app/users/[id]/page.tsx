import { prisma } from '@/app/lib/prisma'
import Image from 'next/image'

type Props = {
	params: {
		id: string
	}
}

const page = async ({ params }: Props) => {
	const user = await prisma.user.findUnique({
		where: {
			id: params.id,
		},
	})
	const { name, bio, image } = user ?? {}

	return (
		<div>
			<h1>{name}</h1>
			<Image src={image!} alt={name!} width={200} height={200} />
			<p>{bio}</p>
		</div>
	)
}

export default page
