import { useEffect, useState } from 'react';
import { GetServerSideProps } from "next";
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getSession, signIn } from 'next-auth/client';
import { toast } from 'react-toastify';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import styles from './styles.module.scss';

interface IData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Esse campo é obrigatório')
    .email('Esse campo precisa ser um email válido'),
  password: yup.string().required('Esse campo é obrigatório'),
});

export default function Login() {
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const router = useRouter();

  async function onSubmit(data: IData) {
    signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: `${window.location.origin}/perfil`,
    });
  }

  useEffect(() => {
    if (router.query.error) {
      setError(String(router.query.error));
    }
  }, [router.query]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h3>Bem vindo(a) de volta, faça Login novamente</h3>

          <Input
            error={errors.email ? errors.email.message : ''}
            type="email"
            placeholder="Email"
            name="email"
            parentClassName={styles.formInput}
            register={register}
          />

          <Input
            error={errors.password ? errors.password.message : ''}
            type="password"
            placeholder="Senha"
            name="password"
            parentClassName={styles.formInput}
            register={register}
          />

          <Button variant="primary" type="submit">
            Fazer login
          </Button>

          <p>
            Não é membro? Crie sua conta <Link href="/registro">aqui</Link>.
          </p>

          <span className={styles.or}>
            <hr />
            ou
            <hr />
          </span>

          <Button variant="custom" type="button" className={styles.google}>
            <img src="/images/google.svg" alt="Login com Google" />
            Login com Google
          </Button>

          <Button variant="custom" type="button" className={styles.facebook}>
            <img src="/images/facebook.svg" alt="Login com Facebook" />
            Login com Facebook
          </Button>
        </form>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: '/perfil',
        permanent: false,
      },
    };
  }

  return {
    props: {}
  }
}