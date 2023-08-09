import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Button, Typography } from '../../shared';
import styles from './service-card.module.scss';

type ServiceCardProps = {
  title: string;
  link: string;
  logo: string | StaticImport;
};

const ServiceCard = ({ title, link, logo }: ServiceCardProps) => {
  return (
    <div className={styles.serviceCard}>
      <Image src={logo} alt="service logo" />
      <Typography className={styles.serviceCard__title} component="h4">
        {title}
      </Typography>
      <Link href={link} className={styles.serviceCard__link}>
        <Button
          variant="secondary"
          size="large"
          className={styles.serviceCard__button}
        >
          Перейти на сайт
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
