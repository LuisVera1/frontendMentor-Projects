import styles from './strength.module.css'


export default function StrengthLevel({ strength }) {

  const strengthLabel = {
    0: 'NONE',
    1: 'TOO WEAK!',
    2: 'WEAK',
    3: "MEDIUM",
    4: 'STRONG'
  }

  const setStyle = (position) => {
    if (strength == 0) return 'lv0'

    if (position <= strength) {
      return `lv${strength}`
    } else {
      return `lv0`
    }
  }

  return (
    <div className={styles.strengthSection}>
      <p className={styles.strengthLabel}>Strength</p>

      <div className={styles.newComponent}>
        <p className={strength == 0 ? styles.strengthScoreHidden : styles.strengthScore}>{strengthLabel[strength]}</p>

        <div className={styles.indicator}>
          <div className={styles[`${setStyle(1)}`]}></div>
          <div className={styles[`${setStyle(2)}`]}></div>
          <div className={styles[`${setStyle(3)}`]}></div>
          <div className={styles[`${setStyle(4)}`]}></div>
        </div>
      </div>

    </div>
  )
}