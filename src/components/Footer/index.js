import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png'
import Behance from '../../assets/images/behance.png'
import Dribble from '../../assets/images/dribbble.png'
import Instagram from '../../assets/images/instagram.png'
import LinkedIn from '../../assets/images/linkedin.png'
import Pinterest from '../../assets/images/pinterest.png'

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className="container">
        <div className={styles.footer_txt}>
          <div className={styles.footer_line}></div>
          <div>
            <a href="#">
              <img src={Logo} alt="logo"></img>
            </a>
          </div>
          <nav>
            <ul className={styles.nav_links}>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </nav>

          <small>NY / +1 123456 7890 / hello@graphics.studio.com</small>
          <div className={styles.icons}>
           
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <p>Copyright © 2019 Graphics Studio | All rights reserved</p>
      </div>
      <div>
      <ul className={styles.FootSocial}>
            <li>
              <a href="#">
                <img src={Behance} alt="Behance logo"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Dribble} alt="Dribble logo"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Instagram} alt="ig logo"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={LinkedIn} alt="linked in logo"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Pinterest} alt="pintrest logo"></img>
              </a>
            </li>
          </ul>
      </div>
    </section>
  );
};

export default Footer;
