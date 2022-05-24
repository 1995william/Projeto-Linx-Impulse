import styles from "./Produtos.module.css";
import Botao from "../Botao/Botao";
export default function Lista({ produtos }) {
  return (
    <>
      {produtos.map((produto, index) => (
        <li key={index}>
          <div className={styles.produtos}>
            <img src={produto.image} alt="produto" />
            <p>{produto.name}</p>
            <p className={styles.produtosDescricao}>{produto.description}</p>
            <p>{`De: R$${produto.oldPrice.toFixed(2).replace(".", ",")}`}</p>
            <h3>{`Por: R$${produto.price.toFixed(2).replace(".", ",")}`}</h3>
            <p>{`ou ${produto.installments.count}x de R$${produto.installments.value
              .toFixed(2)
              .replace(".", ",")}`}</p>
            <div className={styles.btnComprar}>
              <Botao texto="Comprar" />
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
