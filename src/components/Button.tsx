import { ComponentProps, ReactNode, forwardRef } from 'react';
import styles from './Button.module.scss';

type ButtonProps = ComponentProps<'button'> & {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { title, leftIcon, rightIcon, className = '', ...rest } = props;

    return (
      <button className={`${styles.button} ${className}`} {...rest} ref={ref}>
        {leftIcon}
        <span>{title}</span>
        {rightIcon}
      </button>
    );
  }
);
