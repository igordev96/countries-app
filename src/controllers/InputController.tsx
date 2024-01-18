import { ComponentProps, forwardRef } from 'react';
import styles from './InputController.module.scss';
import { MagnifyingGlass } from '@phosphor-icons/react';

type InputController = ComponentProps<'input'>;

export const InputController = forwardRef<HTMLInputElement, InputController>(
  (props, ref) => {
    const { className = '', ...rest } = props;

    return (
      <div className={`${styles.container} ${className}`}>
        <MagnifyingGlass size={16} weight='bold' className={styles.icon} />
        <input className={styles.input} {...rest} ref={ref} />
      </div>
    );
  }
);
