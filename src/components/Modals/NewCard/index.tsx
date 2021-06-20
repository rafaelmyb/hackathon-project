import { useSession } from 'next-auth/client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../../Button';
import { Input } from '../../Input';
import { Base } from '../Base';

import styles from './styles.module.scss';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';

interface IData {
  bank: string;
  flag: string;
  is_used: string;
}

interface NewCardProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onCreateCard: () => void;
}

const schema = yup.object().shape({
  bank: yup.string().required('Esse campo é obrigatório'),
  flag: yup.string().required('Esse campo é obrigatório'),
  is_used: yup.string().required('Esse campo é obrigatório'),
});

const isUsedValues = {
  false: false,
  true: true,
};

export function NewCard({
  isOpen,
  onRequestClose,
  onCreateCard,
}: NewCardProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const [session] = useSession();

  // replace as session.user.id
  const id = 'bbdecb19-883e-4421-b647-898c74f0206e';

  async function onSubmit(data: IData) {
    const { bank, flag, is_used } = data;
    try {
      const response = await api.post('cards', {
        bank,
        flag,
        user_id: id,
        is_used: isUsedValues[is_used],
      });

      if (response.status === 201) {
        toast.success('Seu cartão foi criado com sucesso.');
        onCreateCard();
      }
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      }
      toast.error(
        'Não foi possível criar seu cartão. Tente novamente mais tarde.'
      );
    }
  }

  return (
    <Base
      title="Adicionar novo cartão"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          name="bank"
          id="bank"
          placeholder="Banco"
          register={register}
          error={errors.bank ? errors.bank.message : ''}
        />
        <select
          name="bandeira"
          id="bandeira"
          placeholder="Bandeira"
          defaultValue="none"
          {...register('flag')}
        >
          <option value="none" disabled>
            Bandeira
          </option>
          <option value="MasterCard">MasterCard</option>
          <option value="Visa">Visa</option>
          <option value="American Express">American Express</option>
          <option value="Elo">Elo</option>
        </select>
        <div className={styles.formGroup}>
          <span>Já foi utilizado?</span>
          <div>
            <label>
              <input
                type="radio"
                name="is_used"
                value="true"
                {...register('is_used')}
              />
              Sim
            </label>

            <label>
              <input
                type="radio"
                name="is_used"
                value="false"
                {...register('is_used')}
              />
              Não
            </label>
          </div>
        </div>
        <Button variant="primary">Criar cartão</Button>
      </form>
    </Base>
  );
}
