import React, { useState } from "react";
import styles from "./Clients.module.css";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";

const Clients = () => {
    return (
        <section className={styles.client}>
          <div className="container">
            <div className={styles.client_txt}>
              <h1>What My Client Says</h1>
              <div className={styles.client_line}></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis
                nostrud exercitation.
              </p>
            </div>
            <div className={styles.client_portfolio}>
              <div className={styles.client_imgs}>
                <img src={img2} alt="img1" className={styles.FirstImage}/>
                <img src={img3} alt="img2" className={styles.SecImage}/>
                <img src={img1} alt="img3" className={styles.ThirdImage}/>
                <img src={img1} alt="img4"className={styles.FourthImage}/>
                <img src={img2} alt="img5" className={styles.FifthImage}/>
                <img src={img3} alt="img6" className={styles.SixthImage}/>
              </div>
              <div className={styles.client_data}>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et
                  quasi architecto beatae vitae dicta sunt is the most
                  explicabo.{" "}
                </p>
                <div className={styles.CEOName}>
                    <h3>- Sara Smith</h3>
                    <h5>CEO ABC Company</h5>
                </div>
                        
                    
              </div>
            </div>
          </div>
        </section>
      );
    };

export default Clients;
