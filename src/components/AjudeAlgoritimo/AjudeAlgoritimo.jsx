import Formulario from "./Formulario/Formulario";
import svgArrow from "../../assets/imgs/arrowUp.svg";
import styles from "./AjudeAlgoritmo.module.css";
import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../../utils/useWindowDimensions";

export default function AjudeAlgoritimo() {
  const { height, width } = useWindowDimensions();
  const detailsRef = useRef(null);
  const [arrowDown, setDown] = useState(true);
  useEffect(() => {
    if (width > 760) {
      detailsRef.current.open = true;
    }
  }, [width]);

  const contentClassname = arrowDown
    ? `${styles["arrowDown"]} ${styles.img}`
    : styles.img;

  const handleDetailsClick = (e) => {
    if (width > 760) e.preventDefault();
  };
  return (
    <section className={styles.secao}>
      <aside>
        <details open id="algoritimo" ref={detailsRef} onClick={handleDetailsClick}>
          <summary
            className={styles.secaoTitulo}
            onClick={() => setDown(!arrowDown)}
          >
            <h1>Ajude o algorítimo a ser mais certeiro</h1>
            <img className={contentClassname} src={svgArrow} alt="arrow" />
          </summary>
          <article>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ultricies tellus nec mi porta convallis sollicitudin
              eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse
              semper pretium consectetur. Praesent bibendum arcu risus, sit amet
              iaculis ex tempus quis. Cras et erat ut tellus vulputate
              tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu
              non felis tristique eleifend.
            </p>
            <p>
              Morbi eu condimentum urna. Curabitur eu magna eget turpis
              condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar
              purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra.
              Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla
              varius elementum erat vel pharetra. Aenean sit amet nisi diam.
              Morbi viverra, magna ac luctus commodo, odio ante suscipit libero,
              at mattis augue est vel metus.
            </p>
          </article>
        </details>
      </aside>
      <Formulario />
    </section>
  );
}
