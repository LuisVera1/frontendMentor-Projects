import './variables.css';
import styles from './page.module.css';
import Card from './components/Card/card'

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Password Generator App',
	description:
		'Hi, this is my solution to Password Generator App Challenge from Frontend Mentor',
};

export default function PasswordGenerator() {

	return (
		<div className={styles.container}>
			<Card />
		</div>
	);
}
