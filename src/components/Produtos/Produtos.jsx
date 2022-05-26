import Botao from "../Botao/Botao";
import Divisor from "../Divisor/Divisor";
import styles from "./Produtos.module.css";
import { useState, useEffect } from "react";
import Lista from "./Lista";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [contador, setContador] = useState(1);

  const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${contador}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setProdutos([...produtos, ...res.products]));
  }, [contador]);
  return (
    <div className={styles.containerSecaoProdutos}>
      <section id="produtos" className={styles.secaoProdutos}>
        <Divisor texto={"Sua seleção especial"} />
        <ul className={styles.containerProdutos}>
          <Lista produtos={produtos} />
        </ul>
        <div className={styles.btnMaisProdutos}>
          <Botao
            texto="Ainda mais produtos aqui!"
            onClick={() => setContador(contador + 1)}
          />
        </div>
      </section>
    </div>
  );
}
