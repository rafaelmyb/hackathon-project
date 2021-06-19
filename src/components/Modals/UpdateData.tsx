import { Button } from '../Button';
import { Base } from './Base';

interface UpdateDataProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function UpdateData({ isOpen, onRequestClose }: UpdateDataProps) {
  return (
    <Base title="Alterar dados" isOpen={isOpen} onRequestClose={onRequestClose}>
      <form>
        <input
          type="email"
          name="new_email"
          id="new_email"
          placeholder="Novo email"
        />
        <input
          type="email"
          name="confirm_new_email"
          id="confirm_new_email"
          placeholder="Confirmar novo email"
        />
        <Button variant="primary">Confirmar</Button>
      </form>
    </Base>
  );
}
