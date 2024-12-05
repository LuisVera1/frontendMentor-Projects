'use client';
import styles from './score.module.css';

export default function Score() {
	return (
		<>
			<div className={styles.scoreCard}>
				<p className={styles.scoreTitle}>user</p>
				<p className={styles.scoreValue}>0</p>
			</div>
		</>
	);
}
