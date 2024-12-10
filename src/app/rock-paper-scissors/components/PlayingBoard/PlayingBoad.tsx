import Image from 'next/image';
import styles from './Playingboard.module.css';

export default function PlayingBoard() {
	return (
		<>
			<div className={styles.mainBoard}>
				{/* user */}
				<div className={styles.playerSection}>
					<p className={styles.playerTitle}>YOU PICKED</p>

					<div className={styles.userItem}>
						<div className={styles.iconSection}>
							<Image
								src="./rock-paper-scissors/board/icon-paper.svg"
								height={50}
								width={50}
								alt="none"
							/>
						</div>
					</div>
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
