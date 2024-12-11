import ItemPicked from '../ItemPicked/ItemPicked';
import styles from './Playingboard.module.css';

export default function PlayingBoard() {
	return (
		<>
			<div className={styles.mainBoard}>
				{/* user */}
				<div className={styles.playerSection}>
					<p className={styles.playerTitle}>YOU PICKED</p>
					<ItemPicked />
				</div>

				{/* computer */}
				<div className={styles.playerSection}>
					<p className={styles.playerTitle}>THE HOUSE PICKED</p>
					<div className={styles.spaceCircle}>
						<div className={styles.circle}></div>
					</div>
				</div>
			</div>
		</>
	);
}
