'use client'
import Image from 'next/image';
import styles from './password.module.css'
import { useEffect, useState } from 'react';

const appstatus = {
  start: 'start',
  generated: 'generated',
  copied: 'copied',
}

export default function PasswordField() {
  const [status, setStatus] = useState(appstatus.generated)

  //hide COPIED legend
  useEffect(() => {
    if (status === appstatus.copied) {
      const timer = setTimeout(() => setStatus(appstatus.generated), 1500);
      return () => clearTimeout(timer);
    }
  }, [status]);
  
  const handleCopyPassword = () => {
    if (status == appstatus.generated) {
      //copy password
      navigator.clipboard.writeText('p4s5w0rd');
      //update status
      setStatus(appstatus.copied)
    }
  }

  return (
    <div className={styles.passFieldSection}>
      <h2 className={status == appstatus.start ? styles.passEmpty : styles.passActive}>P4$5W0rD!</h2>

      <div className={styles.btnCopiedSection}>
        {status == appstatus.copied && <p className={styles.copied}>COPIED</p>}

        <button className={styles.btnCopy} onClick={handleCopyPassword} aria-label='Copy password'>
          <Image
            src="password-generator/icon-copy.svg"
            width={21}
            height={24}
            alt="Copy password"
          />
        </button>

      </div>

    </div>
  )
}