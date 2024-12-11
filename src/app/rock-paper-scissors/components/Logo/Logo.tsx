'use client';

import Image from 'next/image';
import styles from './logo.module.css';
import { useStore } from '../../store/store';

export default function Logo() {
	const { basicType } = useStore((state) => state);

	return (
		<>
			{/* logo basic */}
			{basicType == true && (
				<Image
					className={styles.headerLogoBasic}
					src="./rock-paper-scissors/logo.svg"
					width={155.48}
					height={92.68}
					alt="Rock paper Scissors"
					priority={true}
				/>
			)}

			{/* logo bonus */}
			{basicType == false && (
				<Image
					className={styles.headerLogoBonus}
					src="./rock-paper-scissors/logo-bonus.svg"
					width={108.84}
					height={108.08}
					alt="Rock paper Scissors"
					priority={true}
				/>
			)}
		</>
	);
}
