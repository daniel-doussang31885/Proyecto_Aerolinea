import React from 'react'
import styles from "./Inicio.module.css"

const Inicio = () => {
  return (
    <div name="Inicio" className={styles.inicio}>
      <div className={styles.titleContainer}>
        <p>
          Bienvenidos a la aerolínea <b>¡VUELA LEJOS!</b>
        </p>
        <p>
          Aquí encontrarás los mejores precios para tu próximo vuelo.
        </p>
      </div>

    </div>
  )
}

export default Inicio