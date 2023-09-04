import React from 'react'
import styles from "./Contacto.module.css"
import {GoMail} from "react-icons/go"
import {BsTelephoneInbound} from "react-icons/bs"

const Contacto = () => {
  return (
    <div name="Contacto" className={styles.contacto}>
      <div className={styles.titleContainer}>
        <p>
          No dudes en contactarnos en caso de cualquier duda
        </p>
        <p>
          Tenemos distintas opciones de atención
        </p>
        <p>
         <b><BsTelephoneInbound/> <a href="tel:+56996040090">996040090</a></b> <br></br>
         <b><BsTelephoneInbound/> <a href="tel:+56996040091">996040091</a></b> <br></br>
         <hr></hr>
         <b><GoMail/> <a href="mailto:contacto@aerolinea.cl">contacto@aerolinea.cl</a></b>
        </p>
      </div>

    </div>
  )
}

export default Contacto