import styles from "./Botao.module.css"
export default function Botao ({texto}) {
    return (
        <button className={`${styles.botoes} ${styles.largura}`}>{texto}</button>
    )
}