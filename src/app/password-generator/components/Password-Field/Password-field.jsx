import Image from 'next/image';
import styles from './password.module.css'

export default function PasswordField() {
  const state = 'start'

  return (
    <div className={styles.passFieldSection}>
      <h2 className={state != 'star' ? styles.passEmpty : styles.passActive}>P4$5W0rD!</h2>

      <div className={styles.btnCopiedSection}>
        {state != 'start' && <p className={styles.copied}>COPIED</p>}
        <Image
          src="password-generator/icon-copy.svg"
          width={21}
          height={24}
          alt="Copy password"
        />
      </div>

    </div>
  )
}