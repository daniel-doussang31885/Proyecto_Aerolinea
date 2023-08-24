import React from 'react'
import styles from "./Hoteles.module.css";

const Hoteles = () => {
  return (
    <div name="Hoteles" className={styles.hoteles}>
    <div className={styles.titleContainer}>
      <p>
        Tenemos distintos convenios con hoteles según tus gustos. 
      </p>
      <img className={styles.image} src={require("../Images/hotel1.jpg")} />
      <img className={styles.image} src={require("../Images/hotel2.jpg")} />
      <img className={styles.image} src={require("../Images/hotel3.jpg")} />
    </div>

  </div>
  )
}

export default Hoteles