import React, { CSSProperties, PropsWithChildren } from 'react';
import classnames from 'classnames';
import styles from './button.module.scss';

type ButtonProps = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    size?: 'small' | 'medium' | 'large';
    variant?: 'white' | 'primary' | 'secondary';
  }
>;

const Button = ({
  children,
  className,
  size = 'medium',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classnames(className, styles.button, size, variant)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
