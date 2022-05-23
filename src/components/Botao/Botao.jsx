import styles from "./Botao.module.css"
export default function Botao ({texto, onClick}) {
    return (
        <button className={`${styles.botoes} ${styles.largura}`} onClick={onClick}>{texto}</button>
    )
}