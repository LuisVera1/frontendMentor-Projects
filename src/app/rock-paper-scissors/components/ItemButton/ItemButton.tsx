import Image from 'next/image';
import styles from './itembutton.module.css';

interface buttonData {
	name: string;
	handleChoice: Function;
	src: string;
	width: number;
	height: number;
}

export default function ItemButton({ data }: { data: buttonData }) {
	const { name, handleChoice, src, width, height } = data;

	return (
		<>
			<div className={styles.itemShadow}>
				<button
					className={`${styles.btnSection} ${styles[`${name}Btn`]}`}
					onClick={() => handleChoice(name)}
				>
					<div className={styles.iconSection}>
						<Image
							className={styles.icon}
							src={src}
							width={width}
							height={height}
							alt={name}
						/>
					</div>
				</button>
				<div
					className={`${styles.item3dEffect} ${styles[`${name}Effect`]}`}
				></div>
			</div>
		</>
	);
}
