'use client';
import styles from './score.module.css';

interface InfoScore {
	player: string;
	value: number;
}

export default function Score({ data }: { data: InfoScore }) {
	return (
		<>
			<div className={styles.scoreCard}>
				<p className={styles.scoreTitle}>{data.player}</p>
				<p className={styles.scoreValue}>{data.value}</p>
			</div>
		</>
	);
}
