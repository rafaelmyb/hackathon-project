import Head from 'next/head';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
    <Head>
      <title>hackathon-project</title>
    </Head>

    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <h1>TEXTOS DE AJUDA</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <button type="button">
          Pesquisar Incidentes
        </button>
        <button type="button">
          Criar Incidente
        </button>

        <span>Tem um código de incidente?</span>
        
        <div className={styles.input_submit}>
          <input type="text" placeholder="Digite seu código aqui" />
          <button type="submit">
            <img src="/images/log-in.svg" alt="Entrar no incidente" />
          </button>
        </div>
      </section>

      <img className={styles.card_locked} src="/images/card-locked.svg" alt="A decidir" />
    </main>
    </>
  )
}
