import React from 'react';
import CharacterCard from './character-card/character-card';
import { Container, Typography } from '../shared';
import styles from './about-us.module.scss';

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <Container className={styles.aboutUs__container}>
        <div className={styles.aboutUs__content}>
          <div>
            <h2>Трансгран — команда международного уровня</h2>
            <Typography size="lg" className={styles.aboutUs__subtitle}>
              Помогаем российскому бизнесу легально проводить оплаты в условиях
              глобальной изоляции
            </Typography>
            <ul>
              <li>
                <Typography size="md">
                  Команда с финансовым, логистическим и управленческим опытом
                </Typography>
              </li>
              <li>
                <Typography size="md">
                  Инициатор инновационных и технологических продуктов на рынке
                  банковских услуг
                </Typography>
              </li>
            </ul>
          </div>
          <CharacterCard />
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
