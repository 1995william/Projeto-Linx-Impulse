import Botao from "../Botao/Botao";
import Divisor from "../Divisor/Divisor";
import styles from "./Produtos.module.css";
import { useState, useEffect } from "react";
import Lista from "./Lista";
import { apiProdutos } from "../../service/apiProdutos";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [contador, setContador] = useState(1);

  useEffect(() => {
    const apiData = async () => {
      const data = await apiProdutos(contador);
  
      setProdutos([...produtos, ...data.products]);
    };
    apiData();
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
