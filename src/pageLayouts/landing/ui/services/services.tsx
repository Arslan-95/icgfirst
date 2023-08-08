import React from 'react';
import styles from './services.module.scss';
import { Container } from '../shared';
import ServiceCard from './service-card/service-card';
import cryperaLogo from '../shared/assets/cryptera-service-logo.svg';
import firstLineLogo from '../shared/assets/first-line-service-logo.svg';

const Services = () => {
  return (
    <div className={styles.services}>
      <Container>
        <h2>Наши цифровые сервисы</h2>
        <div className={styles.services__cards}>
          <div className={styles.services__card}>
            <ServiceCard
              title="Трансграничные платежи через криптовалюту для юридических лиц"
              link="https://www.linkedin.com/in/arslan-sarakaev/"
              logo={cryperaLogo}
            />
          </div>
          <div className={styles.services__card}>
            <ServiceCard
              title="Решение проблем по сделкам ВЭД и трансграничным платежам любой сложности."
              link="https://www.linkedin.com/in/arslan-sarakaev/"
              logo={firstLineLogo}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
