import React, { useCallback } from 'react'
import styles from './styles.module.css'
import { shuffle } from '../../helpers'

const Item = ({ question, options, onChange = () => null, ...props }) => {
  const handleChange = useCallback(
    (e) => {
      onChange(e.target.value)
    },
    [onChange]
  )
  return (
    <div className={styles.questionnaireItemWrapper}>
      <div className={styles.question}>
        <img src={question} alt='question' />
      </div>
      <div className={styles.answer}>
        <select name='answer' onChange={handleChange} defaultValue={null}>
          <option>Select correct value</option>
          {shuffle(options).map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Item
