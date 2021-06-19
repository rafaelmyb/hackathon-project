import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error: string;
  parentClassName?: string;
  register: UseFormRegister<any>;
}

export function Input({
  parentClassName,
  className,
  name,
  error,
  register,
  ...rest
}: InputProps) {
  const formGroupClassName = [styles.formGroup, parentClassName]
    .filter(Boolean)
    .join(' ');
  const inputClassName = [className, styles.input].filter(Boolean).join(' ');

  return (
    <div className={formGroupClassName}>
      <span className={styles.error}>{error}</span>
      <input className={inputClassName} {...rest} {...register(name)} />
    </div>
  );
}
