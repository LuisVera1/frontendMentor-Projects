import { setWinner } from '../../helpers/setWinner';
import { states } from '../../helpers/states';
import { useStore } from '../../store/store';
import ItemPicked from '../ItemPicked/ItemPicked';
import styles from './Playingboard.module.css';

const label = {
	user: 'YOU WIN',
	computer: 'YOU LOSE',
	draw: "It'S A DRAW",
};

export default function PlayingBoard() {
	const { basicType, state, items: itemsSelected } = useStore((state) => state);

	const winner = setWinner({
		userItem: itemsSelected.user,
		computerItem: itemsSelected.computer,
	});

	const handleWinnerEffect = (player: string) => {
		if (state == states.result && player == winner) return true;
		return false;
	};

	const handleResult = () => {
		return label[winner as keyof typeof label];
	};

	return (
		<>
			<div className={styles.mainBoard}>
				{/* user */}
				<div className={styles.playerSection}>
					<p className={styles.playerTitle}>YOU PICKED</p>
					<ItemPicked
						picked={itemsSelected.user}
						winner={handleWinnerEffect('user')}
					/>
				</div>

				{/* play again - only on result state */}
				{state == states.result && (
					<div className={styles.resultSection}>
						<p className={styles.resultLabel}>{handleResult()}</p>
						<button className={styles.btnPlayAgain}>PLAY AGAIN</button>
					</div>
				)}

				{/* computer circle - only on playing state */}
				{state == states.playing && (
					<div className={styles.playerSection}>
						<p className={styles.playerTitle}>THE HOUSE PICKED</p>
						<div className={styles.spaceCircle}>
							<div className={styles.circle}></div>
						</div>
					</div>
				)}

				{/* computer picked - only on result state */}
				{state == states.result && (
					<div className={styles.playerSection}>
						<p className={styles.playerTitle}>THE HOUSE PICKED</p>
						<ItemPicked
							picked={itemsSelected.computer}
							winner={handleWinnerEffect('computer')}
						/>
					</div>
				)}
			</div>
		</>
	);
}
