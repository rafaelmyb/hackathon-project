import { Button } from '../Button';
import { Base } from './Base';

interface UpdatePasswordProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function UpdatePassword({
  isOpen,
  onRequestClose,
}: UpdatePasswordProps) {
  return (
    <Base title="Alterar senha" isOpen={isOpen} onRequestClose={onRequestClose}>
      <form>
        <input
          type="password"
          name="old_password"
          id="old_password"
          placeholder="Senha antiga"
        />
        <input
          type="password"
          name="new_password"
          id="new_password"
          placeholder="Senha nova"
        />
        <Button variant="primary">Confirmar</Button>
      </form>
    </Base>
  );
}
