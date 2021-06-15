import Head from 'next/head';
import Link from 'next/link';

import styles from './styles.module.scss';

export default function Login() {
  return(
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.form}>
          <h3>Bem vindo(a) de volta, faça Login novamente</h3>

          <input 
            type="text" 
            placeholder="Nome de usuário"
          />

          <input
            type="password" 
            placeholder="Senha"
          />

          <button type="submit">
            Fazer login
          </button>

          <p>Não é membro? crie sua conta <Link href="">aqui</Link></p>
          
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