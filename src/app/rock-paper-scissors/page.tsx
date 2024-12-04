import './variables.css';
import styles from './page.module.css';

import type { Metadata } from 'next';
import Image from 'next/image';
import Score from './components/score/Score';
import Modal from './components/modal/Modal';

export const metadata: Metadata = {
	title: 'Rock Paper Scissors Game!',
	description:
		'Hi, this is my solution to Rock, Paper, Scissors App Challenge from Frontend Mentor',
};

export default function RockPaperScissors() {
	return (
		<div className={styles.container}>
			<header>
				<div className={styles.headerSection}>
					<Image
						className={styles.headerLogo}
						src="./rock-paper-scissors/logo.svg"
						width={155.48}
						height={92.68}
						alt="Rock paper Scissors"
						priority={true}
					/>

					<div className={styles.scoreSection}>
						<Score data={{ player: 'user', value: 0 }} />
						<Score data={{ player: 'computer', value: 0 }} />
					</div>
				</div>
			</header>

			<main>board</main>

			<Modal />



			<footer className={styles.footer}>
				<button className={styles.footerButton}>MODE</button>
				<button className={styles.footerButton}>RULES</button>
			</footer>
		</div>
	);
}
