import React from 'react';
import styles from './landing.module.scss';
import Main from './ui/main/main';
import Features from './ui/features/features';
import Benefits from './ui/benefits/benefits';
import AboutUs from './ui/about-us/about-us';
import OurPartners from './ui/our-partners/our-partners';
import SystemCapabilities from './ui/system-capabilities/system-capabilities';
import Process from './ui/process/process';
import Portfolio from './ui/portfolio/portfolio';
import FormScreen from './ui/form-screen/form-screen';
import Services from './ui/services/services';

const LandingPage = () => {
  return (
    <div className={styles.landing}>
      <Main />
      <Features />
      <AboutUs />
      <OurPartners />
      <SystemCapabilities />
      <Portfolio />
      <Process />
      <Benefits />
      <FormScreen />
      <Services />
    </div>
  );
};

export default LandingPage;
