import Botao from "../Botao/Botao"
export default function Compartilhe () {
    return (
        <section>
            <h1>Compartilhe a novidade</h1>
            <div>
                <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
            </div>
            <div>
                <label>Nome do seu amigo: <input type="text" /></label>
                <label>E-mail: <input type="text" /></label>
            </div>
            <Botao texto='Enviar agora'/>
        </section>
    )
}