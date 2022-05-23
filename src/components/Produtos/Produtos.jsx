import Botao from "../Botao/Botao";
import Divisor from "../Divisor/Divisor";
import styles from "./Produtos.module.css";
import { useState, useEffect } from "react";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [contador, setContador] = useState(1);

  const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${contador}`;
  console.log(contador);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setProdutos(res.products));
  }, [contador]);
  console.log(produtos);

  return (
    <div className={styles.containerSecaoProdutos}>
      <section className={styles.secaoProdutos}>
        <Divisor texto={"Sua seleção especial"} />
        <ul className={styles.containerProdutos}>
          {produtos.map((produto, index) => (
            <li key={index}>
              <div className={styles.produtos}>
                <img src={produto.image} alt="produto" />
                <p>{produto.name}</p>
                <p className={styles.produtosDescricao}>
                  {produto.description}
                </p>
                <p>{`De: R$${produto.oldPrice},00`}</p>
                <h3>{`Por: R$${produto.price},00`}</h3>
                <p>{`ou 2x de R$${(produto.price / 2)
                  .toFixed(2)
                  .replace(".", ",")}`}</p>
                <div className={styles.btnComprar}>
                  <Botao texto="Comprar" />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.btnMaisProdutos}>
          <Botao
            texto="Ainda mais produtos aqui!"
            onClick={() => {
              setContador(contador + 1);
            }}
          />
        </div>
      </section>
    </div>
  );
}
