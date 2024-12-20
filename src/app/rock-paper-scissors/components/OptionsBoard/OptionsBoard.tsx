import { useStore } from '../../store/store';
import { useRef } from 'react';
import { computerSelection } from '@/app/rock-paper-scissors/helpers/computerSelection';
import { states } from '../../helpers/states';

import styles from './optionsBoard.module.css';
import ItemButton from '../ItemButton/ItemButton';

export default function OptionsBoard() {
	const { basicType, setStateGame, savePickedItems } = useStore(
		(state) => state
	);

	const handleChoice = (userS: string) => {
		const computerS = computerSelection(basicType);

		//save items
		savePickedItems({ user: userS, computer: computerS });

		//set state playing
		setStateGame(states.playing);
	};

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
			{/* basic type */}
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
