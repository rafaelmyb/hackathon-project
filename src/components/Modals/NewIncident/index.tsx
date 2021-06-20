import { Button } from '../../Button';
import { Base } from '../Base';

import styles from './styles.module.scss';

interface NewIncidentProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const mockCards = [
  {
    id: 1,
    bank: 'Banco Santander',
    banner: 'MasterCard',
    was_used: false,
  },
  {
    id: 2,
    bank: 'Banco Santander',
    banner: 'MasterCard',
    was_used: false,
  },
  {
    id: 3,
    bank: 'Banco Santander',
    banner: 'MasterCard',
    was_used: false,
  },
];

export function NewIncident({ isOpen, onRequestClose }: NewIncidentProps) {
  return (
    <Base
      title="Adicionar novo incidente"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <form>
        <select name="card" id="card" placeholder="Cartão" defaultValue="none">
          <option value="none" disabled>
            Cartão
          </option>
          {mockCards.map(card => (
            <option key={card.id} value={card.id}>
              {card.bank} - {card.banner}
            </option>
          ))}
        </select>
        <input type="text" name="value" id="value" placeholder="Valor" />
        <textarea name="comment" id="comment" placeholder="Comentário" rows={4}></textarea>
        <div className={styles.formGroup}>
          <span>Foi online?</span>
          <div>
            <label htmlFor="was_online">
              <input type="radio" name="was_online" value="true" />
              Sim
            </label>

            <label htmlFor="was_online">
              <input type="radio" name="was_online" value="false" />
              Não
            </label>
          </div>
        </div>
        <input type="text" name="place" id="place" placeholder="Lugar (opcional)" />
        <Button variant="primary">Criar incidente</Button>
      </form>
    </Base>
  );
}
