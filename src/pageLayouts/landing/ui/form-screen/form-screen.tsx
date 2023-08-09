import React from 'react';
import styles from './form-screen.module.scss';
import { BackgroundFigure, Container } from '../shared';
import Form from './form/form';

const FormScreen = () => {
  return (
    <div className={styles.formScreen} id="form-screen">
      <Container className={styles.formScreen__container}>
        <BackgroundFigure
          size={387}
          position={{
            top: -44,
            right: -72,
          }}
          visibleAdaptive={{
            from: 'md',
          }}
        />
        <BackgroundFigure
          size={546}
          position={{
            top: 274,
            left: -107,
          }}
          visibleAdaptive={{
            from: 'md',
          }}
        />

        <div className={styles.formScreen__content}>
          <h2>Оставьте заявку, а мы сделаем остальное</h2>
          <Form />
        </div>
      </Container>
    </div>
  );
};

export default FormScreen;
