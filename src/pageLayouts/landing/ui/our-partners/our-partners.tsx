import React from 'react';
import styles from './our-partners.module.scss';
import { Container } from '../shared';
import Image from 'next/image';
import moskovExportCenterImage from '../shared/assets/partner-moskov-export-center.svg';
import minpromtorgImage from '../shared/assets/partner-minpromtorg.svg';
import russianExportCenterImage from '../shared/assets/partner-russian-export-center.svg';
import tinkoffImage from '../shared/assets/partner-tinkoff.svg';

const OurPartners = () => {
  return (
    <div className={styles.ourPartners}>
      <Container>
        <h2>Наши партнеры</h2>
        <div className={styles.partners}>
          <div className={styles.partner}>
            <Image
              src={moskovExportCenterImage}
              alt="Московский экспортный центр"
            />
          </div>
          <div className={styles.partner}>
            <Image src={minpromtorgImage} alt="МИНПРОМТОРГ РОССИИ" />
          </div>
          <div className={styles.partner}>
            <Image
              src={russianExportCenterImage}
              alt="РОССИЙСКИЙ ЭКСПОРТНЫЙ ЦЕНТР"
            />
          </div>
          <div className={styles.partner}>
            <Image src={tinkoffImage} alt="ТИНЬКОФФ" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurPartners;
