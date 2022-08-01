import Botao from "../../Botao/Botao";
import styles from "./Formulario.module.css";
import { useState } from "react";
export default function Formulario() {
  
  const [user, setUser] = useState({
    nome:'',
    email:'',
    cpf:''
  })
   const [status, setStatus] = useState({
    type:'',
    mensagem:'',
  })
 const valueInput = e => setUser({...user,[e.target.name]: e.target.value});

 const cadastro = e => {

    e.preventDefault();

    if(!validate()) return;

    const saveDataForm = true;
    if(saveDataForm) {
      setStatus({
        type: 'successo',
        mensagem: 'Usuário cadastrado com sucesso!'
      })
      setUser({
        name: '',
        email:'',
        cpf: ''
      })
    } else {
      setStatus({
        type: 'erro',
        mensagem: 'Erro: Usuário nao cadastrado com sucesso!'
      })
    }
  }

  function validate() {
    if (!user.nome) return setStatus({ type: 'erro', mensagem: 'Preencha o campo nome' });
    if (!user.email) return setStatus({ type: 'erro', mensagem: 'Preencha o campo Email' });
    if (!user.cpf) return setStatus({ type: 'erro', mensagem: 'Preencha o campo CPF' });
    if (user.cpf.match(/^[0-9]*$/) == null) return setStatus({ type: 'erro', mensagem: 'Digite apenas números no campo CPF' });
    if (user.cpf.length < 11 | user.cpf.length > 11) return setStatus({ type: 'erro', mensagem: 'CPF precisa ter 11 dígitos' });

    return true;
  }
  return (
    <form className={styles.formulario} onSubmit={cadastro}>
      {status.type == 'successo'? <small className={styles.msgSucesso}>{status.mensagem}</small>: ''}
      {status.type == 'erro'? <small className={styles.msgErro}>{status.mensagem}</small>: ''}
      <label>
        Seu nome: <br />
        <input className={styles.inputTexto} name="nome" type="text" onChange={valueInput} value={user.name} />
      </label>

      <label>
        E-mail <br />
        <input className={styles.inputTexto} name="email" type="email" onChange={valueInput} value={user.email}/>
      </label>

      <label>
        CPF: <br />
        <input
          className={styles.inputTexto}
          minLength={11}
          name="cpf"
          type="text"
          onChange={valueInput}
          value={user.cpf}
        />
      </label>

      <div className={styles.containerLabel}>
        <label className={styles.labelRadio}>
          <input className={styles.radio} name="sexo" type="radio" defaultChecked={true} />
          Masculino
        </label>

        <label className={styles.labelRadio}>
          <input className={styles.radio} name="sexo" type="radio" />
          Feminino
        </label>
      </div>
      <div className={styles.btnEnviar}>
        <Botao texto="Enviar" type="submit" />
      </div>
    </form>
  );
}
