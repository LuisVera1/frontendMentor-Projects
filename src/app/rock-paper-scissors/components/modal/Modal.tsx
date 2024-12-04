'use client';
import Image from 'next/image';
import styles from './modal.module.css';
export default function Modal() {
	const handleCloseModal = () => {
		console.log('close');
	};

	return (
		<div className={styles.background}>
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
						src="./rock-paper-scissors/image-rules.svg"
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
