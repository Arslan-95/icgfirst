'use client';

import React from 'react';
import styles from './form.module.scss';
import { Input, SubmitButton, Typography } from '../../shared';

const Form = () => {
  const submit = () => {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        <Input className={styles.input} placeholder="Ваше имя и фамилия" />
        <Input
          className={styles.input}
          placeholder="Номер телефона или Telegram"
        />
        <Input className={styles.input} type="email" placeholder="E-mail" />
        <Input className={styles.input} placeholder="Название компании" />
      </div>
      <Typography className={styles.agreement}>
        Отправляя данную форму, вы Подтверждаете Согласие на обработку
        персональных данных в соответствии с Политикой обработки и защиты
        персональных данных, а также даю Согласие на рассылку электронных
        сообщений
      </Typography>
      <SubmitButton onClick={submit} />
    </form>
  );
};

export default Form;
