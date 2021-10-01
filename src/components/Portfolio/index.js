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
  const [activeTab, setActiveTab] = useState("all");
  return (
    <div className={styles.PortfolioSection}>
      <div className="container">
        <h2>Portfolio</h2>
        <nav>
          <ul>
            <li>
              <button className={`${activeTab === "all" ? "active" : ""}`} onClick={() =>setActiveTab("all")}>All</button>
            </li>
            <li>
              <button className={`${activeTab === "logo" ? "active" : ""}`} onClick={() =>setActiveTab("logo")}>Logo</button>
            </li>
            <li>
              <button className={`${activeTab === "websites" ? "active" : ""}`} onClick={() =>setActiveTab("websites")}>Websites</button>
            </li>
            <li>
              <button className={`${activeTab === "mobile" ? "active" : ""}`} onClick={() =>setActiveTab("mobile")}>Mobile Apps</button>
            </li>
          </ul>
        </nav>
        {(() => {
            switch (activeTab) {
              case "all":
                return (
                  <div className={styles.CardsWrap}>
                  {portfolio.map((item, index) => {
                    return (
                      <Card
                        key={index}
                        img={item.image}
                        heading={item.heading}
                        category={item.category}
                      ></Card>
                    );
                  })}
                </div>
                );
              case "logo":
                return (
                  <div className={styles.CardsWrap}>
                      <Card
                          img={abadLogo}
                          heading={"Sedut Perspiciatis"}
                          category={"logo"}
                          ></Card>
                      <Card
                          img={nalie}
                          heading={"Sedut Perspiciatis"}
                          category={"logo"}
                          ></Card>
                      </div>
                );
              case "websites":
                return (
                  <div className={styles.CardsWrap}>
                    <Card
                      img={abadLogo}
                      heading={"Sed ut Perspiciatis"}
                      category={"websites"}
                    />
                    <Card
                      img={aprikot}
                      heading={"Sed ut Perspiciatis"}
                      category={"websites"}
                    />
                    </div>
                );
              case "mobile":
                return (
                  <div className={styles.CardsWrap}>
                    <Card
                      img={pharmacy}
                      heading={"Sed ut Perspiciatis"}
                      category={"mobile"}
                    />
                    <Card
                      img={hitMillion}
                      heading={"Sed ut Perspiciatis"}
                      category={"mobile"}
                    />
                    </div>
                );
              default:
                return activeTab;
            }
          })()}
        
               
                   
              
        
      </div>
    </div>
  )
}

export default Portfolio
