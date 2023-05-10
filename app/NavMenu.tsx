import Image from 'next/image'
import style from './NavMenu.module.css'
import logo from '@/public/logo.svg'
import Link from 'next/link'
import { SignInButton, SignOutButton } from './components/buttons'
import AuthCheck from './components/AuthCheck'

export default async function NavMenu() {
	return (
		<nav className={style.nav}>
			<Link href='/'>
				<Image src={logo} alt='logo' width={216} height={30} />
			</Link>
			<ul className={style.links}>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>
					<Link href='/blog'>Blog</Link>
				</li>
				<li>
					<Link href='/users'>Users</Link>
				</li>
				<li>
					<SignInButton />
				</li>
				<li>
					<AuthCheck>
						<SignOutButton />
					</AuthCheck>
				</li>
			</ul>
		</nav>
	)
}
