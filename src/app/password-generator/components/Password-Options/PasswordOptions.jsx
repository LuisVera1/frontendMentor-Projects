'use client'

import { useState } from 'react'
import styles from './content.module.css'

const initialState = {
  length: 10,
}

export default function PasswordOptions() {
  const [options, setOptions] = useState(initialState);

  const handleChange = (event) => {
    const element = event.target.name;
    const value = event.target.value;
    setOptions({ ...options, [element]: value })
  }


  return (
    <div className={styles.content}>


      {/* length */}
      <div className={styles.lengthSection}>
        <p className={styles.labelLength}>
          Character Length
        </p>
        <p className={styles.lengthIndicator}>{options.length}</p>
      </div>

      {/* range */}
      <input
        className={styles.inpRange}
        type="range"
        name="length"
        min="5"
        max="15"
        step="1"
        value={options.length}
        onChange={handleChange}
      />


      {/* checkboxes */}

      <div className={styles.checkboxesSection}>
        <label htmlFor='uppercase'>
          <input className={styles.inputBox} type="checkbox" name="uppercase" id="uppercase" />
          <div className={styles.boxIndicator}></div>
          Include Uppercase Letters</label>


      </div>

      <div>
        <input type="checkbox" name="lowercase" id="lowercase" />
        <label htmlFor='lowercase'>Include Lowercase Letters</label>
      </div>






      {/* working */}

      <div>

        [] Include Numbers
        [] Include Symbols
      </div>



      <div className={styles.strengthSection}>
        <p className={styles.strengthLabel}>Strength</p>

        <div className={styles.newComponent}>
          <p className={styles.strengthScore}>STRONG</p>
          <div className={styles.indicator}>
            <div className={styles.strength1}></div>
            <div className={styles.strength2}></div>
            <div className={styles.strength3}></div>
            <div className={styles.strength4}></div>
          </div>


        </div>

      </div>

      <button className={styles.button}>Generate</button>


    </div>









  )
}