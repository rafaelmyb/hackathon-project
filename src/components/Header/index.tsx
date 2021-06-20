import { signOut, useSession } from 'next-auth/client';
import Link from 'next/link';

import styles from './styles.module.scss';

export function Header() {
  const [session] = useSession();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="LOGO" />
        <nav>
          {session ? (
            <>
              <Link href="/perfil">Perfil</Link>
              <span>/</span>
              <a onClick={() => signOut()}>Sair</a>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <span>/</span>
              <Link href="/registro">Criar Conta</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
