import Head from 'next/head';
import Link from 'next/link';

import styles from './styles.module.scss';

export default function Registro() {
  return(
    <>
      <Head>
        <title>Criar conta</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.form}>
          <h3>Bem vindo(a), para continuar, crie sua conta</h3>

          <input 
            type="text" 
            placeholder="Nome de usuário"
          />

          <input
            type="password" 
            placeholder="Senha"
          />

          <input
            type="text"
            placeholder="Data de nascimento"
          />

          <input
            type="email" 
            placeholder="Email"
          />

          <button type="submit">
            Criar minha conta
          </button>

          <p>Já é membro? Faça o login <Link href={'./login'}>aqui</Link></p>
          
          <span><hr />ou<hr /></span>

          <button type="button" className={styles.google}>
            <img src="/images/google.svg" alt="Login com Google" />
            Login com Google
          </button>

          <button type="button" className={styles.facebook}>
            <img src="/images/facebook.svg" alt="Login com Facebook" />
            Login com Facebook
          </button>
        </div>
      </main>
    </>
  )
}