'use client';
import { useStore } from '../../store/store';
import styles from './score.module.css';

export default function Score() {
	const { basicType, basicV, bonusV } = useStore((state) => state);
	const scores = basicType == true ? basicV : bonusV;

	return (
		<>
			<div className={styles.scoreCard}>
				<p className={styles.scoreTitle}>User</p>
				<p className={styles.scoreValue}>{scores.user}</p>
			</div>

			<div className={styles.scoreCard}>
				<p className={styles.scoreTitle}>Computer</p>
				<p className={styles.scoreValue}>{scores.computer}</p>
			</div>
		</>
	);
}
