import React, { useState } from 'react'
import styles from "./CentroAyuda.module.css";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, } from 'reactstrap';

const CentroAyuda = () => {

  const [open, setOpen] = useState('');

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div name="CentroAyuda" className={styles.centroAyuda}>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem >
          <AccordionHeader targetId="1">¿Cómo funciona el Check-in automático?</AccordionHeader>
          <AccordionBody className={styles.accordionBody} accordionId="1">
            <p>Una vez que hayas realizado la compra de tu pasaje en vuelo nacional, te enviaremos
              inmediatamente tu tarjeta de embarque dinámica. Cuando queden 48 horas antes de tu vuelo, ya
              tendrás la información actualizada con los últimos detalles de tu viaje.
              El día de tu vuelo, preséntate en el aeropuerto normalmente. Si viajas con equipaje de mano, solo
              tienes que pasar directamente a la puerta de embarque con tu cédula de identidad o pasaporte.
              En tu tarjeta de embarque dinámica verás actualizado el número de puerta.
              Si llevas equipaje de bodega, dirígete a nuestro counter o kiosco de autoatención para etiquetar
              tus maletas y entregarlas en el counter.</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">¿Puedo cambiar un vuelo o la fecha de mi pasaje?</AccordionHeader>
          <AccordionBody className={styles.accordionBody} accordionId="2">
            <p>Puedes llamar para verificar si tu pasaje te permite cambiar la fecha o destino de tu viaje sin multas ni diferencias tarifarias.
              Si el vuelo es cancelado o reprogramado debido a la pandemia COVID-19, o por otras razones de seguridad o de fuerza mayor, podrás reprogramar tu viaje, solicitar el reembolso del valor del pasaje o contratar otros servicios de nuestra aerolínea. Conoce más en nuestra sección de política de cambios.
              Ten en cuenta que por ahora, el cambio de pasajes en línea sólo está disponible en Chile y Ecuador.</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">¿Qué pasa si mi vuelo se canceló?</AccordionHeader>
          <AccordionBody className={styles.accordionBody} accordionId="3">
            <p>No te preocupes, llama y podrás aceptar el nuevo itinerario que te proponemos o:<br></br>
              - Elegir una nueva fecha<br></br>
              - Pedir la devolución</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">Si quieres elegir una nueva fecha</AccordionHeader>
          <AccordionBody className={styles.accordionBody} accordionId="4">
            <p>-Podrás hacer un cambio sin costo en la misma cabina del viaje original.<br></br>
              -Podrás reprogramar el nuevo vuelo durante la vigencia de tu pasaje*.</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">*Vigencia del pasaje:</AccordionHeader>
          <AccordionBody className={styles.accordionBody} accordionId="5">
            <p>-Si tu viaje original comenzaba entre el 1 de marzo y el 31 de diciembre 2020, la vigencia es hasta el 31 de diciembre de 2021.<br></br>
              -Si tu viaje original comienza en 2021, la vigencia es de 12 meses a partir de la fecha del primer vuelo de tu pasaje.<br></br>
              -Si ya comenzaste el viaje, deberás completar el regreso no más allá de 12 meses desde tu primer vuelo.</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="6">Si prefieres no viajar y pedir la devolución</AccordionHeader>
          <AccordionBody className={styles.accordionBody} accordionId="6">
            <p>Recibirás un Travel Voucher que podrás canjear por servicios de la aerolínea o dinero. Si usaste tus millas para canjear tu pasaje, éstas serán devueltas en tu cuenta de socio.</p>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default CentroAyuda