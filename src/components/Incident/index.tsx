import styles from './styles.module.scss';

interface IncidentProps {
  incident: {
    id: string;
    index: number;
    name: string;
    value: string;
    place: string;
    comment: string;
    handleOpenUpdateIncident: () => void;
    handleOpenDeleteIncident: () => void;
  };
}

export function Incident({ incident }: IncidentProps) {
  return (
    <>
      <div className={styles.incidentHeader}>
        <div className={styles.incidentHeaderContent}>
          <h3>INCIDENTE {incident.index}</h3>
          <span>{incident.name}</span>
          <span>{incident.value}</span>
          <span>{incident.place}</span>
        </div>

        <div className={styles.incidentUpdateDelete}>
          <img
            src="/images/pencil.svg"
            alt="Editar"
            onClick={incident.handleOpenUpdateIncident}
          />
          <img
            src="/images/trash.svg"
            alt="Deletar"
            onClick={incident.handleOpenDeleteIncident}
          />
        </div>
      </div>

      <div className={styles.incidentComment}>
        <p>
          {incident.comment}
        </p>
      </div>
    </>
  );
}
