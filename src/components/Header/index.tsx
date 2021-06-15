import styles from './styles.module.scss';

export function Header() {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="LOGO" />
        <nav>
          <a href="">Login</a>
          <span>/</span>
          <a href="">Criar Conta</a>
        </nav>
      </div>
    </header>
  )
}