'use client'
import styles from './card.module.css'
import PasswordField from '../Password-Field/Password-field'
import PasswordOptions from '../Password-Options/PasswordOptions'
import { useState } from 'react'
import { appstatus } from '../../helpers/states'



export default function Card() {
  const [status, setStatus] = useState(appstatus.start);
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);

  return (
    <main>
      <div className={styles.card}>

        {/* title */}
        <div className={styles.card__titleContainer}>
          <h1 className={styles.title}>Password Generator</h1>
        </div>

        {/* components */}
        <div>
          <PasswordField status={status} setStatus={setStatus} password={password} />
          <PasswordOptions status={status} setStatus={setStatus} setPassword={setPassword} strength={strength} setStrength={setStrength} />
        </div>
      </div>
    </main>
  )
}