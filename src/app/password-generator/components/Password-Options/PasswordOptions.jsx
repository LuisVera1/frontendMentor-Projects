import styles from './content.module.css'

export default function PasswordOptions() {
  return (
    <>

      <div className={styles.content}>

        <div>
          Character Length
          [] Include Uppercase Letters
          [] Include Lowercase Letters
          [] Include Numbers
          [] Include Symbols
        </div>



        <div className={styles.strengthSection}>
          Strength
        </div>

        <button className={styles.button}>Generate</button>


      </div>








    </>
  )
}