import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import styles from './styles.module.scss';
import { api } from '../../services/api';

interface IData {
  email: string;
  name: string;
  password: string;
  birthday: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Esse campo é obrigatório')
    .email('Esse campo precisa ser um email válido'),
  password: yup.string().required('Esse campo é obrigatório'),
  name: yup.string().required('Esse campo é obrigatório'),
  birthday: yup.date().required('Esse campo é obrigatório'),
});

export default function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  async function onSubmit(data: IData) {
    const { name, password, birthday, email } = data;

    try {
      const response = await api.post('users', {
        name,
        password,
        email,
        birthday,
      });

      if (response.status = 201) {
        toast.success("Sua conta foi criada com sucesso. Agora, realize o login.");
      }
    } catch (e) {
      if (e.response.data.message) {
        return toast.error(e.response.data.message);
      }
      toast.error("Não foi possível realizar o registro do usuário. Tente novamente mais tarde.")
    }
  }

  return (
    <>
      <Head>
        <title>Criar conta</title>
      </Head>
      <main className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h3>Bem vindo(a), para continuar, crie sua conta</h3>

          <Input
            error={errors.name ? errors.name.message : ''}
            type="text"
            placeholder="Nome completo"
            name="name"
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

          <Input
            error={errors.birthday ? errors.birthday.message : ''}
            type="date"
            placeholder="Data de nascimento"
            name="birthday"
            parentClassName={styles.formInput}
            register={register}
          />

          <Input
            error={errors.email ? errors.email.message : ''}
            type="email"
            placeholder="Email"
            name="email"
            parentClassName={styles.formInput}
            register={register}
          />

          <Button variant="primary" type="submit">Criar minha conta</Button>

          <p>
            Já é membro? Faça o login <Link href="/login">aqui</Link>.
          </p>

          <span className={styles.or}>
            <hr />
            ou
            <hr />
          </span>

          <Button variant="custom" type="button" className={styles.google}>
            <img src="/images/google.svg" alt="Login com Google" />
            Continuar com Google
          </Button>

          <Button variant="custom" type="button" className={styles.facebook}>
            <img src="/images/facebook.svg" alt="Login com Facebook" />
            Continuar com Facebook
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
    props: {},
  };
};
