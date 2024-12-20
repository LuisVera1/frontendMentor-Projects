import Image from 'next/image';
import styles from './itempicked.module.css';
import { listItems } from '../../helpers/items';

type ItemKeys = keyof typeof listItems;

interface item {
	picked: string;
	winner: boolean;
}

export default function ItemPicked(props: item) {
	const { picked: itemSelected, winner } = props;

	const enums = Object.keys(listItems);
	const data = (is: string) => {
		if (enums.includes(is)) return itemSelected as ItemKeys;
		return 'rock';
	};
	const picked = data(itemSelected);

	return (
		<>
			<div
				className={`${styles.shadow} ${
					winner == true ? styles.shadowWinner : ''
				}`}
			>
				<div className={`${styles.item} ${styles[picked + 'Item']}`}>
					<div className={styles.iconSection}>
						<Image
							className={styles.icon}
							src={listItems[picked].src}
							width={listItems[picked].width * 1.7}
							height={listItems[picked].height * 1.7}
							alt={listItems[picked].name}
						/>
					</div>
				</div>
				<div
					className={`${styles.item3dEffect} ${styles[picked + '3d']}`}
				></div>
			</div>
		</>
	);
}
