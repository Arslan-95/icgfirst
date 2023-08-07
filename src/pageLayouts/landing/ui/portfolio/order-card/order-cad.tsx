'use client';

import React from 'react';
import Image from 'next/image';
import styles from './order-card.module.scss';
import { Typography } from '../../shared';
import { useAdaptive } from '@/shared/breakpoints';
import bgImage from '../../shared/assets/portfolio-order-card-bg.png';

export type OrderCardProps = {
  title: string;
  task: string;
  completedTasks: string[];
};

const OrderCard = ({ title, task, completedTasks }: OrderCardProps) => {
  const { isDown } = useAdaptive();
  const isDownThanMd = isDown('md');

  return (
    <div className={styles.orderCard}>
      <div className={styles.header__container}>
        <div className={styles.header}>
          <Image src={bgImage} alt="background" />
          <div className={styles.header__overlay} />
          <Typography size={isDownThanMd ? 'md' : 'xl'}>{title}</Typography>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content__bit}>
          <Typography size={isDownThanMd ? 'lg' : 'xl'} component="span">
            Задача:
          </Typography>
          <Typography size={isDownThanMd ? 'sm' : 'md'}>{task}</Typography>
        </div>

        <div className={styles.content__bit}>
          <Typography size={isDownThanMd ? 'lg' : 'xl'} component="span">
            Сделали:
          </Typography>
          <ul>
            {completedTasks.map((completedTask, index) => (
              <li key={index}>
                <Typography size={isDownThanMd ? 'sm' : 'md'}>
                  {completedTask}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
