import { Button } from '../Button';
import { Base } from './Base';

interface UpdateIncidentProps {
  id: number;
  isOpen: boolean;
  onRequestClose: () => void;
}

export function UpdateIncident({
  id,
  isOpen,
  onRequestClose,
}: UpdateIncidentProps) {
  return (
    <Base
      title={`Alterar o incidente ${id}`}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <form>
        <input type="text" name="value" id="value" placeholder="Valor" />
        <textarea
          name="comment"
          id="comment"
          placeholder="Comentário"
          rows={4}
        ></textarea>
        <Button variant="primary">Confirmar</Button>
      </form>
    </Base>
  );
}
