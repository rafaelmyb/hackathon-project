import Head from 'next/head';
import { useState } from 'react';

import { UpdateData } from '../../components/Modals/UpdateData';
import { UpdatePassword } from '../../components/Modals/UpdatePassword';
import { DeleteIncident } from '../../components/Modals/DeleteIncident';
import { NewCard } from '../../components/Modals/NewCard';
import { NewIncident } from '../../components/Modals/NewIncident';
import { UpdateIncident } from '../../components/Modals/UpdateIncident';

import styles from './styles.module.scss';

export default function Perfil() {
  const [updateDataIsOpen, setUpdateDataIsOpen] = useState(false);
  const [updatePasswordIsOpen, setUpdatePasswordIsOpen] = useState(false);
  const [newCardIsOpen, setNewCardIsOpen] = useState(false);
  const [newIncidentIsOpen, setNewIncidentIsOpen] = useState(false);
  const [deleteIncidentIsOpen, setDeleteIncidentIsOpen] = useState(false);
  const [updateIncidentIsOpen, setUpdateIncidentIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Nome do usuário | Nome do projeto</title>
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
              <b>Nome: </b>Matheus Landuci da Silva
            </p>
            <p>
              <b>Email: </b>matheuslanduci@gmail.com
            </p>
            <p>
              <b>Data de Nascimentos: </b>23/11/2002
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
              <div className={styles.card}>
                <img
                  src="/images/mastercard-card.svg"
                  alt="Cartão Mastercard"
                />
                <p>
                  Banco Santander <br />
                  <span>Não foi utilizado</span>
                </p>
              </div>

              <div className={styles.card}>
                <img src="/images/visa-card.svg" alt="Cartão Visa" />
                <p>
                  Banco Caixa <br />
                  <span>Já foi utilizado</span>
                </p>
              </div>

              <div className={styles.card}>
                <img
                  src="/images/mastercard-card.svg"
                  alt="Cartão Mastercard"
                />
                <p>
                  Banco Santander <br />
                  <span>Não foi utilizado</span>
                </p>
              </div>
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
            <div className={styles.incidentHeader}>
              <div className={styles.incidentHeaderContent}>
                <h3>INCIDENTE 1</h3>
                <span>Cartão Santander (Bandeira MasterCard)</span>
                <span>R$2.231,50</span>
                <span>Online</span>
              </div>

              <div className={styles.incidentUpdateDelete}>
                <img src="/images/pencil.svg" alt="Editar"
                  onClick={() => setUpdateIncidentIsOpen(true)}
                />
                <img
                  src="/images/trash.svg"
                  alt="Deletar"
                  onClick={() => setDeleteIncidentIsOpen(true)}
                />
              </div>
            </div>

            <div className={styles.incidentComment}>
              <p>
                <b>Comentário: </b>lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nulla at augue ut mauris vehicula euismod vel
                et sem. Integer quam lorem, bibendum vitae molestie in,
                ultricies eget eros. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Integer a bibendum ipsum. Donec varius magna
                vel dui tincidunt, non interdum lacus maximus. Sed vitae elit
                ex.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
