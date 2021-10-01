import React, { useState } from 'react'
import styles from './Portfolio.module.css'
import Card from '../Card'
import abadLogo from '../../assets/images/abadLogo.png'
import artLabCard from '../../assets/images/artLab.png'
import aprikot from '../../assets/images/aprikot.png'
import pharmacy from '../../assets/images/pharmacy.png'
import nalie from '../../assets/images/nalieLip.png'
import hitMillion from '../../assets/images/hitMillion.png'

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([
    { image: abadLogo, heading: 'Sed ut Perspiciatis', category: 'websites' },
    { image: artLabCard, heading: 'Sed ut Perspiciatis', category: 'logo' },
    { image: aprikot, heading: 'Sed ut Perspiciatis', category: 'websites' },
    { image: pharmacy, heading: 'Sed ut Perspiciatis', category: 'mobile' },
    { image: nalie, heading: 'Sedut Perspiciatis', category: 'logo' },
    { image: hitMillion, heading: 'Sed ut Perspiciatis', category: 'mobile' },
  ])
  return (
    <div className={styles.PortfolioSection}>
      <div className="container">
        <h2>Portfolio</h2>
        <nav>
          <ul>
            <li>
              <button>All</button>
            </li>
            <li>
              <button>Logo</button>
            </li>
            <li>
              <button>Websites</button>
            </li>
            <li>
              <button>Mobile Apps</button>
            </li>
          </ul>
        </nav>
        <div className={styles.CardsWrap}>
          {portfolio.map((item, index) => {
            return (
              <Card
                key={index}
                img={item.image}
                heading={item.heading}
                category={item.category}
              ></Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
