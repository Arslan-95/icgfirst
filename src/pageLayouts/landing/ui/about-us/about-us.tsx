import React from 'react';
import CharacterCard from './character-card/character-card';
import { CardSection, Container } from '../shared';
import MainContent from './main-content/main-content';
import styles from './about-us.module.scss';
import { OutlinedCard } from '../shared/card';
import { ABOUT_US_CARDS } from './lib';

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <Container className={styles.aboutUs__container}>
        <div className={styles.aboutUs__content}>
          <MainContent />
          <div className={styles.characterCardWrapper}>
            <CharacterCard />
          </div>
        </div>
        <CardSection type="outlined">
          {ABOUT_US_CARDS.map((card) => (
            <OutlinedCard key={card.id} {...card} />
          ))}
        </CardSection>
      </Container>
    </div>
  );
};

export default AboutUs;
