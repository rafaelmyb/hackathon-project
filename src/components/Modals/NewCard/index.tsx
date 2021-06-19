import { Button } from '../../Button';
import { Base } from '../Base';

import styles from './styles.module.scss';

interface NewCardProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewCard({ isOpen, onRequestClose }: NewCardProps) {
  return (
    <Base
      title="Adicionar novo cartão"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <form>
        <input type="text" name="bank" id="bank" placeholder="Banco" />
        <select name="bandeira" id="bandeira" placeholder="Bandeira" defaultValue="none">
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
            <label htmlFor="was_used">
              <input type="radio" name="was_used" value="true" />
              Sim
            </label>

            <label htmlFor="was_used">
              <input type="radio" name="was_used" value="false" />
              Não
            </label>
          </div>
        </div>
        <Button variant="primary">Criar cartão</Button>
      </form>
    </Base>
  );
}
