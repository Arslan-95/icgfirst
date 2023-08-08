import React from 'react';
import styles from './form-screen.module.scss';
import { Container, Typography } from '../shared';
import Form from './form/form';

const FormScreen = () => {
  return (
    <div className={styles.formScreen}>
      <Container>
        <h2>Оставьте заявку, а мы сделаем остальное</h2>
        <Form />
      </Container>
    </div>
  );
};

export default FormScreen;
