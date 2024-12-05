import './variables.css';
import styles from './page.module.css';

import type { Metadata } from 'next';

import Score from './components/score/Score';
import Modal from './components/modal/Modal';
import Buttons from './components/buttons/Buttons';
import Logo from './components/logo/Logo';

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
					<Logo />
					<div className={styles.scoreSection}>
						<Score />
						<Score />
					</div>
				</div>
			</header>

			<main>board</main>

			<Modal />

			<footer className={styles.footer}>
				<Buttons />
			</footer>
		</div>
	);
}
