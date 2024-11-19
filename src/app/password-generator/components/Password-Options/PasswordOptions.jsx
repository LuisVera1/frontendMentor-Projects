'use client'

import { useState } from 'react'
import styles from './content.module.css'
import Arrow from '../Icons/Arrow'
import { countTypes, generatePassword, appstatus, getStrength } from '../../helpers'
import StrengthLevel from '../StrengthLevel/StrengthLevel'

const initialState = {
  length: 10,
  uppercase: false,
  lowercase: false,
  numbers: false,
  symbols: false,
  selected: 0,
}

export default function PasswordOptions({ status, setStatus, setPassword, strength, setStrength }) {
  const [options, setOptions] = useState(initialState);

  // range controller
  const handleRange = (event) => {
    const element = event.target.name;
    const value = event.target.value;
    setOptions({ ...options, [element]: value })
  }

  // check controller
  const handleCheck = (event) => {
    const element = event.target.name;
    const value = !options[element]
    setOptions({ ...options, [element]: value })
  }

  // - - - - - submit
  const handleSubmit = (event) => {
    event.preventDefault();

    //return if status isnt start or generated
    if (status != appstatus.start && status != appstatus.generated) return;

    //count selected
    const data = countTypes(options)

    if (data.selected == 0) {
      alert('Please choose at least one option')
      return;
    }

    //generate password
    const password = generatePassword(data);
    setPassword(password);
    setStatus(appstatus.generated)

    //get strength
    const strengthValue = getStrength(data);
    setStrength(strengthValue);
  }

  return (
    <form className={styles.content} onSubmit={handleSubmit}>

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
        onChange={handleRange}
      />

      {/* checkboxes */}
      <div className={styles.checkboxesSection}>
        <div className={styles.checkRow}>
          <label className={styles.checkboxLabel}>
            <input className={styles.inputBox} type="checkbox" name="uppercase" checked={options.uppercase} onChange={handleCheck} />
            <div className={styles.boxIndicator}></div>
            Include Uppercase Letter
          </label>
        </div>

        <div className={styles.checkRow}>
          <label className={styles.checkboxLabel}>
            <input className={styles.inputBox} type="checkbox" name="lowercase" checked={options.lowercase} onChange={handleCheck} />
            <div className={styles.boxIndicator}></div>
            Include Lowercase Letters
          </label>
        </div>

        <div className={styles.checkRow}>
          <label className={styles.checkboxLabel}>
            <input className={styles.inputBox} type="checkbox" name="numbers" checked={options.numbers} onChange={handleCheck} />
            <div className={styles.boxIndicator}></div>
            Include Numbers
          </label>
        </div>

        <div className={styles.checkRow}>
          <label className={styles.checkboxLabel}>
            <input className={styles.inputBox} type="checkbox" name="symbols" checked={options.symbols} onChange={handleCheck} />
            <div className={styles.boxIndicator}></div>
            Include Symbols
          </label>
        </div>
      </div>

      <StrengthLevel strength={strength} />

      <button className={styles.button} type='submit'>Generate
        <Arrow />
      </button>
    </form>
  )
}