import Head from 'next/head';
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';

import { UpdateData } from '../../components/Modals/UpdateData';
import { UpdatePassword } from '../../components/Modals/UpdatePassword';
import { DeleteIncident } from '../../components/Modals/DeleteIncident';
import { NewCard } from '../../components/Modals/NewCard';
import { NewIncident } from '../../components/Modals/NewIncident';
import { UpdateIncident } from '../../components/Modals/UpdateIncident';
import { Card } from '../../components/Card';
import { Incident } from '../../components/Incident';

import styles from './styles.module.scss';
import { api } from '../../services/api';

interface CardProps {
  bank: string;
  flag: string;
  is_used: boolean;
  id: string;
}

interface IncidentProps {
  id: string;
  bank: string;
  flag: string;
  date: string;
  place: string;
  value: string;
  comment: string;
}

interface PerfilProps {
  cards: CardProps[];
  incidents: IncidentProps[];
  data: {
    name: string;
    email: string;
    birthday: string;
  };
}

export default function Perfil({ cards, data, incidents }: PerfilProps) {
  const [updateDataIsOpen, setUpdateDataIsOpen] = useState(false);
  const [updatePasswordIsOpen, setUpdatePasswordIsOpen] = useState(false);
  const [newCardIsOpen, setNewCardIsOpen] = useState(false);
  const [newIncidentIsOpen, setNewIncidentIsOpen] = useState(false);
  const [deleteIncidentIsOpen, setDeleteIncidentIsOpen] = useState(false);
  const [updateIncidentIsOpen, setUpdateIncidentIsOpen] = useState(false);

  console.log(cards, data, incidents);

  return (
    <>
      <Head>
        <title>{data.name} | Illuminate</title>
      </Head>

      <UpdateData
        isOpen={updateDataIsOpen}
        onRequestClose={() => setUpdateDataIsOpen(false)}
      />
      <UpdatePassword
        isOpen={updatePasswordIsOpen}
        onRequestClose={() => setUpdatePasswordIsOpen(false)}
      />
      <NewCard
        isOpen={newCardIsOpen}
        onRequestClose={() => setNewCardIsOpen(false)}
        onCreateCard={() => console.log('foi!')}
      />
      <NewIncident
        isOpen={newIncidentIsOpen}
        onRequestClose={() => setNewIncidentIsOpen(false)}
      />
      <DeleteIncident
        id={1}
        isOpen={deleteIncidentIsOpen}
        onRequestClose={() => setDeleteIncidentIsOpen(false)}
      />
      <UpdateIncident
        id={1}
        isOpen={updateIncidentIsOpen}
        onRequestClose={() => setUpdateIncidentIsOpen(false)}
      />

      <main className={styles.container}>
        <section className={styles.primaryContentContainer}>
          <div className={styles.profile}>
            <h1>PERFIL</h1>
            <p>
              <b>Nome: </b>
              {data.name}
            </p>
            <p>
              <b>Email: </b>
              {data.email}
            </p>
            <p>
              <b>Data de Nascimento: </b>
              {data.birthday}
            </p>

            <button type="button" onClick={() => setUpdateDataIsOpen(true)}>
              Alterar dados
            </button>
            <button type="button" onClick={() => setUpdatePasswordIsOpen(true)}>
              Alterar senha
            </button>
          </div>

          <div className={styles.cardsContainer}>
            <div className={styles.cardsHeader}>
              <h1>CARTÕES</h1>

              <button type="button" onClick={() => setNewCardIsOpen(true)}>
                <img src="/images/plus.svg" alt="" />
                Novo cartão
              </button>
            </div>

            <div className={styles.cardList}>
              {cards.map(card => (
                <Card
                  key={card.id}
                  card={{
                    name: `Banco ${card.bank}`,
                    is_used: card.is_used,
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.secondaryContentContainer}>
          <div className={styles.incidentsHeaderContainer}>
            <h1>INCIDENTES</h1>

            <button type="button" onClick={() => setNewIncidentIsOpen(true)}>
              <img src="/images/plus.svg" alt="" />
              Novo incidente
            </button>
          </div>

          <div className={styles.incidentContainer}>
            {incidents.map((incident, idx) => (
              <Incident
                key={incident.id}
                incident={{
                  comment: incident.comment,
                  id: incident.id,
                  index: idx,
                  name: `Banco ${incident.bank} - Bandeira ${incident.flag}`,
                  place: incident.place,
                  value: incident.value,
                  handleOpenUpdateIncident: () => {
                    setUpdateIncidentIsOpen(true);
                  },
                  handleOpenDeleteIncident: () => {
                    setDeleteIncidentIsOpen(true);
                  },
                }}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  let cards: CardProps[] = [];

  const response = await api.get(`/cards/${session.id}`);

  cards = response.data.map(card => {
    return {
      bank: card.bank,
      flag: card.flag,
      is_used: card.is_used,
      id: card.id,
    };
  });

  return {
    props: {
      cards,
      incidents: [],
      data: {
        name: '',
        email: '',
        birthday: '',
      },
    },
  };
};
