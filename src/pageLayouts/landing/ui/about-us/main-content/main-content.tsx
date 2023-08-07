'use client';

import React from 'react';
import { Typography } from '../../shared';
import { useAdaptive } from '@/shared/breakpoints';
import styles from './main-content.module.scss';

const MainContent = () => {
  const { isDown } = useAdaptive();
  const isDownThanMd = isDown('md');

  return (
    <div className={styles.mainContent}>
      <h2>Трансгран — команда международного уровня</h2>
      <Typography size={isDownThanMd ? 'md' : 'lg'} className={styles.subtitle}>
        Помогаем российскому бизнесу легально проводить оплаты в условиях
        глобальной изоляции
      </Typography>
      <ul>
        <li>
          <Typography size={isDownThanMd ? 'sm' : 'md'}>
            Команда с финансовым, логистическим и управленческим опытом
          </Typography>
        </li>
        <li>
          <Typography size={isDownThanMd ? 'sm' : 'md'}>
            Инициатор инновационных и технологических продуктов на рынке
            банковских услуг
          </Typography>
        </li>
      </ul>
    </div>
  );
};

export default MainContent;
