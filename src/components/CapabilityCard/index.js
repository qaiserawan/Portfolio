import React from 'react'
import styles from './CapabilityCard.module.css'
import cardImg from '../../assets/images/capabilityCard.png'

const CapabilityCard = (props) => {
  return (
    <div className={styles.CapabilityCard}>
      <div className={styles.ImgWrap}>
        <img src={cardImg} alt="capability-icon"></img>
      </div>
      <div>
        <h3>{props.capability}</h3>
        <p>{props.explaination}</p>
      </div>
    </div>
  )
}

export default CapabilityCard
