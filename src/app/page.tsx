import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Welcome to my Frontend Mentor Projects</h1>

			{/* list */}
			<ul className={styles.list}>
				<li>
					<Link className={styles.link} href="/password-generator">
						- Password Generator App
					</Link>
				</li>
				<li>
					<Link className={styles.link} href="#">
						- My Second Project
					</Link>
				</li>
			</ul>
		</main>
	);
}
