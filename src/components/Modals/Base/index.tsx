import { ReactNode } from 'react';
import ReactModal from 'react-modal';

import { MdClose } from "react-icons/md";

import styles from './styles.module.scss';

interface BaseProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onRequestClose: () => void;
}

export function Base({
  isOpen,
  children,
  onRequestClose,
  title,
}: BaseProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={styles.overlayReactModal}
      className={styles.reactModal}
    >
      <button className={styles.closeButton} onClick={onRequestClose}>
        <MdClose size={24} color="#000" />
      </button>
      <h1 className={styles.title}>{title}</h1>

      {children}
    </ReactModal>
  );
}
