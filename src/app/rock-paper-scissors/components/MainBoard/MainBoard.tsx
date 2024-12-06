'use client';
import Image from 'next/image';
import { useStore } from '../../store/store';
import styles from './mainboard.module.css';

export default function MainBoard() {
	const { basicType } = useStore((state) => state);

	const handleChoice = (item: string) => {
		console.log(item);
		console.log('change state to playing');
	};

	const states = {
		start: 'start', // pick up item
		playing: 'paying', //wait for computer choice
		result: 'result', //show result
	};

	//TODO: create components
	/*
[-] board basic
[] board bonus
[] playing window (you pick, the house pick)
[] result window
  */

	return (
		<>
			<div className={styles.mainBoard}>
				{/* up section */}
				<div className={styles.upperSection}>
					{/* paper */}
					<button
						className={`${styles.itemSection} ${styles.paper}`}
						onClick={() => handleChoice('paper')}
					>
						<div className={styles.iconSection}>
							<Image
								className={styles.icon}
								src="./rock-paper-scissors/board/icon-paper.svg"
								width={73}
								height={86}
								alt="paper"
							/>
						</div>
					</button>

					{/* scissors */}
					<button
						className={`${styles.itemSection} ${styles.scissors}`}
						onClick={() => handleChoice('scissors')}
					>
						<div className={styles.iconSection}>
							<Image
								className={styles.icon}
								src="./rock-paper-scissors/board/icon-scissors.svg"
								width={96}
								height={96}
								alt="scissors"
							/>
						</div>
					</button>
				</div>

				{/* lower section */}
				<div className={styles.lowerSection}>
					{/* rock */}
					<button
						className={`${styles.itemSection} ${styles.rock}`}
						onClick={() => handleChoice('rock')}
					>
						<div className={styles.iconSection}>
							<Image
								className={styles.icon}
								src="./rock-paper-scissors/board/icon-scissors.svg"
								width={96}
								height={96}
								alt="rock"
							/>
						</div>
					</button>
				</div>
			</div>
		</>
	);
}
