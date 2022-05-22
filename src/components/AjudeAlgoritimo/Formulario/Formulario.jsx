import Botao from "../../Botao/Botao";
import styles from "./Formulario.module.css";
export default function Formulario() {
  return (
    <form className={styles.formulario}>
      
      <label>
        Seu nome: <br/>
        <input className={styles.inputTexto} type="text" />
      </label>

      <label>
        E-mail <br/>
        <input className={styles.inputTexto} type="email" />
      </label>

      <label>
        CPF: <br/>
        <input className={styles.inputTexto} type="text" />
      </label>
      
      
      <div className={styles.containerLabel}>
        <label className={styles.labelRadio}>
          <input className={styles.radio} name="sexo" type="radio" />
          Masculino
        </label>

        <label className={styles.labelRadio}>
          <input className={styles.radio} name="sexo" type="radio" />
          Feminino
        </label>
      </div>
      <div className={styles.btnEnviar}>
        <Botao texto="Enviar" />
      </div>
    </form>
  );
}
