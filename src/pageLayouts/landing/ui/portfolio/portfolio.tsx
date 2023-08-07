import React from 'react';
import styles from './portfolio.module.scss';
import OrderCard from './order-card/order-cad';
import { Container, SubmitButton } from '../shared';

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <Container>
        <h2>Сотрудничаем с крупными компаниями</h2>
        <div className={styles.orderCards}>
          <OrderCard
            title="Помогли угольному 
        холдингу с получением 
        экспортной выручки"
            task="Трудности с входом экспортной выручки на территорию РФ"
            completedTasks={[
              'Предоставили Клиенту возможность перевести экспортную выручку на платёжную структуру на Ближнем Востоке',
              'Закрыли Клиенту паспорт сделки в России за счёт входа рублёвой выручки с платёжной структуры в России',
              'Подготовили все закрывающие документы для контролирующих органов',
            ]}
          />
          <OrderCard
            title="Вывели валютные 
        платежи в Азию для 
        импортера техники"
            task="Трудности с выходом валютных платежей в Азию"
            completedTasks={[
              'Предоставили Клиенту возможность провести в рублях платёж на платёжную структуру в России в рамках открытого паспорта сделки',
              'Заплатили Поставщику Импортёра в Азию в валюте с платёжной структуры в Азии',
              'Подготовили все закрывающие документы для контролирующих органов',
            ]}
          />
        </div>
        <div className={styles.action__container}>
          <SubmitButton />
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
