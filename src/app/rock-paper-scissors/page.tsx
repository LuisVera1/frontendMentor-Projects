import './variables.css';
import styles from './page.module.css';

import type { Metadata } from 'next';
import Image from 'next/image';
import Score from './components/score/Score';

export const metadata: Metadata = {
	title: 'Rock Paper Scissors Game!',
	description:
		'Hi, this is my solution to Rock, Paper, Scissors App Challenge from Frontend Mentor',
};

export default function PasswordGenerator() {
	return (
		<div className={styles.container}>
			<header>
				<div className={styles.headerTitle}>
					<Image
						src="./rock-paper-scissors/logo.svg"
						width={155.48}
						height={92.68}
						alt="Rock paper Scissors"
					/>

					<div className={styles.scoreSection}>
						<Score />
						<Score />
					</div>
				</div>
			</header>

			<main>board</main>

			<footer>
				<button>RULES</button>
			</footer>
		</div>
	);
}
