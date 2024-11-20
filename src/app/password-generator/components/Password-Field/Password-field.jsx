'use client'
import styles from './password.module.css'
import { useEffect } from 'react';
import Copy from '@/app/password-generator/components/Icons/Copy'
import { appstatus } from '../../helpers';

export default function PasswordField({ status, setStatus, password }) {

  //hide COPIED legend after 1500ms
  useEffect(() => {
    if (status === appstatus.copied) {
      const timer = setTimeout(() => setStatus(appstatus.generated), 1500);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleCopyPassword = () => {
    if (status == appstatus.generated) {
      //copy password
      navigator.clipboard.writeText(password);
      //update status
      setStatus(appstatus.copied)
    }
  }

  return (
    <div className={styles.passFieldSection}>
      <h2 className={status == appstatus.start ? styles.passEmpty : styles.passActive}>
        {status == appstatus.start ? 'P4$5W0rD!' : password}
      </h2>

      <div className={styles.btnCopiedSection}>
        {status == appstatus.copied && <p className={styles.copied}>COPIED</p>}
        <button className={styles.btnCopy} onClick={handleCopyPassword} aria-label='Copy password' disabled={status == appstatus.start ? true : false}>
          <Copy />
        </button>
      </div>

    </div>
  )
}