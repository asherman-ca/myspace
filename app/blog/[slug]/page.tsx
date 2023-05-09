// forces refetch on each request
export const dynamic = 'force-dynamic'

// forces refetch on interval (incremental static regeneration - dynamic)
// export const revalidate = 420
// export async function generateStaticParams() {
// 	const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
// 		(res) => res.json()
// 	)

// 	return posts.map((post) => ({
// 		slug: post.slug,
// 	}))
// }

type Post = {
	title: string
	slug: string
	content: string
}

type Props = {
	params: { slug: string }
}

const page = async ({ params }: Props) => {
	// also forces refetch on each request
	const posts: Post[] = await fetch('http://localhost:3000/api/content', {
		cache: 'no-store',
	}).then((res) => res.json())
	const post = posts.find((post) => post.slug === params.slug)!

	return (
		<div>
			<h1>{post?.title}</h1>
			<p>{post?.content}</p>
		</div>
	)
}

export default page
