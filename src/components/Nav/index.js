import React, { useState } from 'react'
import Logo from '../../assets/images/logo.png'
import styles from './Nav.module.css'  

const Nav = () => {
  return (
    <div className={styles.Header}>
      <div className="container">
        <div className={styles.HeaderWrap}>
          <div>
            <a href="#">
              <img src={Logo} alt="logo"></img>
            </a>
          </div>
          <ul >
            <li>
              <a href="#"> About</a>
            </li>
            <li>
              <a href="#"> Portfolio</a>
            </li>
            <li>
              <a href="#"> Contact</a>
            </li>
            <li>
              <a href="#">Get Started</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
