'use client';
import Image from 'next/image';
import styles from './modal.module.css';
import { useStore } from '../../store/store';

export default function Modal() {
	const { modal, basicType, closeModal } = useStore((state) => state);

	const imgPath =
		basicType == true
			? './rock-paper-scissors/modal/image-rules.svg'
			: './rock-paper-scissors/modal/image-rules-bonus.svg';

	const handleCloseModal = () => {
		closeModal();
	};

	return (
		<div
			className={`${modal ? styles.background : styles.hideMode}`}
			// onMouseDown={handleCloseModal}
		>
			<div className={styles.modal}>
				{/* content */}
				<div className={styles.modalContent}>
					{/* header */}
					<div className={styles.modalHeader}>
						<p className={styles.modalTitle}>RULES</p>
						<button
							className={`${styles.closeBtn} ${styles.btnHeader}`}
							onClick={handleCloseModal}
						></button>
					</div>

					{/* image */}
					<Image
						className={styles.modalImage}
						src={imgPath}
						width={305}
						height={271}
						alt="rules"
					/>

					{/* close button mobile */}
					<button
						className={`${styles.closeBtn} ${styles.btnFooter}`}
						onClick={handleCloseModal}
					></button>
				</div>
			</div>
		</div>
	);
}
