import Link from 'next/link';

import styles from './styles.module.scss';

export function Header() {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="LOGO" />
        <nav>
          <Link href={'./login'}>
            Login
          </Link>
          <span>/</span>
          <Link href={'./registro'}>
            Criar Conta
          </Link>
        </nav>
      </div>
    </header>
  )
}