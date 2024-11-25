import styles from './score.module.css';

export default function Score() {
	return (
		<>
			<div className={styles.scoreCard}>
				<p className={styles.scoreTitle}>Title</p>
				<p>10</p>
			</div>
		</>
	);
}
