'use client';

import Image from 'next/image';
import styles from './logo.module.css';
import { useStore } from '../../store/store';

export default function Logo() {
	const { basicType } = useStore((state) => state);

	return (
		<Image
			className={styles.headerLogo}
			src="./rock-paper-scissors/logo.svg"
			width={155.48}
			height={92.68}
			alt="Rock paper Scissors"
			priority={true}
		/>
	);
}
