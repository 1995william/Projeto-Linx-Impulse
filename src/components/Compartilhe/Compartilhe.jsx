import Botao from "../Botao/Botao";
import styles from "./Compartilhe.module.css";
import Divisor from "../Divisor/Divisor";

export default function Compartilhe() {
  return (
    <section className={styles.secaoContainer}>
      <Divisor texto="Compartilhe a novidade" />

      <div className={styles.secao}>
        <aside>
          <p>
            Quer que seus amigos também ganhem a lista personalizada deles?
            Preencha agora!
          </p>
        </aside>
        <div className={styles.labelInput}>
          <label>
            Nome do seu amigo: <br /> <input type="text" />
          </label>
          <label>
            E-mail: <br /> <input type="email" />
          </label>
        </div>
      </div>
      <div className={styles.btnEnviar}>
        <Botao texto="Enviar agora" />
      </div>
    </section>
  );
}
