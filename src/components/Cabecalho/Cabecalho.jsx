import Botao from "../Botao/Botao";
import styles from "./Cabecalho.module.css";

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.diagonal}/>
        
      <section>
          <p>uma seleção de produtos</p>
          <h1>especial para você</h1>
          <p>
            Todos os produtos desta lista foram selecioandos a partir da sua
            navegação. Aproveite!
          </p>
        </section>
      <nav className={styles.navegacao}>
        <ul>
          <li>
            <Botao  texto="Conheça a Linx" />
          </li>
          <li>
            <Botao texto="Ajude o algorítimo" />
          </li>
          <li>
            <Botao texto="Seus produtos" />
          </li>
          <li>
            <Botao texto="Compartilhe" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
