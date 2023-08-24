import React from 'react'
import styles from "./Destinos.module.css"

const Destino = () => {
  return (
    <div name="Destinos" className={styles.destinos}>
    <div className={styles.titleContainer}>
      <p>
        Podrás encontrar los mejores destinos nacionales e internacionales.
      </p>
      <img className={styles.image} src={require("../Images/Image1.jpg")} />
      <img className={styles.image} src={require("../Images/image2.jpg")} />
    </div>

  </div>
  )
}

export default Destino