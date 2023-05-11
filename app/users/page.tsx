import UserCard from '@/app/components/UserCard/UserCard'
import styles from './page.module.css'
import { prisma } from '@/app/lib/prisma'

export default async function Users() {
	// simulates loading delay
	await new Promise((resolve) => setTimeout(resolve, 2000))
	const users = await prisma.user.findMany()

	return (
		<div className={styles.grid}>
			{users.map((user) => {
				return <UserCard key={user.id} {...user} />
			})}
		</div>
	)
}
