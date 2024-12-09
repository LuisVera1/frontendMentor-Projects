'use client';
import { useStore } from '../../store/store';
import styles from './mainboard.module.css';
import ItemButton from '../ItemButton/ItemButton';

export default function MainBoard() {
	const { basicType, state } = useStore((state) => state);

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
[x] board basic
[] board bonus
[] playing window (you pick, the house pick)
[] result window
  */

	const buttons = {
		rock: {
			name: 'rock',
			handleChoice: handleChoice,
			src: './rock-paper-scissors/board/icon-rock.svg',
			width: 96,
			height: 96,
		},
		paper: {
			name: 'paper',
			handleChoice: handleChoice,
			src: './rock-paper-scissors/board/icon-paper.svg',
			width: 73,
			height: 86,
		},
		scissors: {
			name: 'scissors',
			handleChoice: handleChoice,
			src: './rock-paper-scissors/board/icon-scissors.svg',
			width: 96,
			height: 96,
		},
	};

	return (
		<>
			<div className={styles.mainBoard}>
				{/* up section */}
				<div className={styles.upperSection}>
					<ItemButton data={buttons.paper} />
					<ItemButton data={buttons.scissors} />
				</div>

				{/* lower section */}
				<div className={styles.lowerSection}>
					<ItemButton data={buttons.rock} />
				</div>
			</div>
		</>
	);
}
