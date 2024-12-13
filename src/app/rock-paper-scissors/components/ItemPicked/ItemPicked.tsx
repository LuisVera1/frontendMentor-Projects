import Image from 'next/image';
import styles from './itempicked.module.css';

const items = {
	rock: {
		name: 'rock',
		src: './rock-paper-scissors/board/icon-rock.svg',
		width: 96,
		height: 96,
	},
	paper: {
		name: 'paper',
		src: './rock-paper-scissors/board/icon-paper.svg',
		width: 73,
		height: 86,
	},
	scissors: {
		name: 'scissors',
		src: './rock-paper-scissors/board/icon-scissors.svg',
		width: 96,
		height: 96,
	},
};

interface item {
	name: string;
	winner?: boolean;
}

export default function ItemPicked() {
	const picked = 'paper';
	const winner = true;

	return (
		<>
			<div
				className={`${styles.shadow} ${winner == true ? styles.shadowWinner : ''}`}
			>
				<div className={styles.item}>
					<div className={styles.iconSection}>
						<Image
							className={styles.icon}
							src={items[picked].src}
							width={items[picked].width * 1.7}
							height={items[picked].height * 1.7}
							alt={items[picked].name}
						/>
					</div>
				</div>
				<div className={styles.item3dEffect}></div>
			</div>
		</>
	);
}
