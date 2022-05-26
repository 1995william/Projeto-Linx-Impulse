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
            <a href="#"><Botao  texto="Conheça a Linx" /></a> 
          </li>
          <li>
          <a href="#algoritimo"> <Botao texto="Ajude o algorítimo" /></a>
          </li>
          <li>
          <a href="#produtos"><Botao href="#produtos" texto="Seus produtos" /></a> 
          </li>
          <li>
           <a href="#compartilhe"><Botao texto="Compartilhe" /></a> 
          </li>
        </ul>
      </nav>
    </header>
  );
}
