import React, { InputHTMLAttributes } from 'react';
import styles from './input.module.scss';
import classnames from 'classnames';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: InputProps) => {
  return <input className={classnames(styles.input, className)} {...props} />;
};

export default Input;
