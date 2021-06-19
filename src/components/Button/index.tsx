import { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'custom';
}

export function Button({ children, className, variant, ...rest }: ButtonProps) {
  const buttonClassName = [className, styles.baseButton, styles[variant]]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
}
