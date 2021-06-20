import styles from "./styles.module.scss";

interface CardProps {
  card: {
    name: string;
    is_used: boolean;
  };
}

export function Card({ card }: CardProps) {
  return (
    <div className={styles.card}>
      <img src="/images/mastercard-card.svg" alt="Cartão Mastercard" />
      <p>
        {card.name} <br />
        <span>{card.is_used ? "Já foi utilizado" : "Não foi utilizado"}</span>
      </p>
    </div>
  );
}