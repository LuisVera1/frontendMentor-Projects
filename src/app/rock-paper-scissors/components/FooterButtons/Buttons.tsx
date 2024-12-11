'use client';

import { useStore } from '../../store/store';
import styles from './buttons.module.css';

export default function Buttons() {
	const { showModal, shitchType } = useStore((state) => state);

	const handleModal = () => {
		showModal();
	};

	const changeMode = () => {
		shitchType();
	};

	return (
		<>
			<button className={styles.footerButton} onClick={changeMode}>
				MODE
			</button>
			<button className={styles.footerButton} onClick={handleModal}>
				RULES
			</button>
		</>
	);
}
