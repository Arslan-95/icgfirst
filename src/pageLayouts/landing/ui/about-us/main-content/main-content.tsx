'use client';

import React from 'react';
import { Typography } from '../../shared';
import { useAdaptive } from '@/shared/breakpoints';
import styles from './main-content.module.scss';

const MainContent = () => {
  const { isUp } = useAdaptive();
  const isUpThanMd = isUp('md');

  return (
    <div className={styles.mainContent}>
      <h2>Трансгран — команда международного уровня</h2>
      <Typography size={isUpThanMd ? 'lg' : 'md'} className={styles.subtitle}>
        Помогаем российскому бизнесу легально проводить оплаты в условиях
        глобальной изоляции
      </Typography>
      <ul>
        <li>
          <Typography size={isUpThanMd ? 'md' : 'sm'}>
            Команда с финансовым, логистическим и управленческим опытом
          </Typography>
        </li>
        <li>
          <Typography size={isUpThanMd ? 'md' : 'sm'}>
            Инициатор инновационных и технологических продуктов на рынке
            банковских услуг
          </Typography>
        </li>
      </ul>
    </div>
  );
};

export default MainContent;
