import { Button } from '../Button';
import { Base } from './Base';

interface DeleteIncidentProps {
  id: number;
  isOpen: boolean;
  onRequestClose: () => void;
}

export function DeleteIncident({
  id,
  isOpen,
  onRequestClose,
}: DeleteIncidentProps) {
  return (
    <Base
      title={`Você tem certeza que deseja excluir o incidente ${id}?`}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <form>
        <Button variant="primary">Confirmar</Button>
      </form>
    </Base>
  );
}
