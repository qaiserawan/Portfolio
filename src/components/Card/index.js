import React from 'react'
import styles from './Card.module.css'

const PortfolioCard = (props) => {
  return (
    <div className={styles.Card}>
      <div className={styles.CardInner}>
        <div>
          <img src={props.img} alt="PortfolioImage"></img>
        </div>
        <div className={styles.CardHover}>
          <div className={styles.HoverText}>
            <h3>{props.heading}</h3>
            <p>{props.category}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
