import './variables.css';
import styles from './page.module.css';
import type { Metadata } from 'next';
import PasswordField from './components/Password-Field/Password-field';
import PasswordOptions from './components/Password-Options/PasswordOptions';

export const metadata: Metadata = {
	title: 'Password Generator App',
	description:
		'Hi, this is my solution to Password Generator App Challenge from Frontend Mentor',
};

export default function PasswordGenerator() {
	return (
		<div className={styles.container}>
			<main>
				<div className={styles.card}>
					{/* title */}
					<div className={styles.card__titleContainer}>
						<h1 className={styles.title}>Password Generator</h1>
					</div>

					{/* content */}
					<div>
						<PasswordField />
						<PasswordOptions />
					</div>
				</div>
			</main>
		</div>
	);
}
