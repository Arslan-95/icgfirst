import React from 'react';
import Main from './ui/main/main';
import Features from './ui/features/features';
import Benefits from './ui/benefits/benefits';
import AboutUs from './ui/about-us/about-us';
import OurPartners from './ui/our-partners/our-partners';
import SystemCapabilities from './ui/system-capabilities/system-capabilities';
import Process from './ui/process/process';

const LandingPage = () => {
  return (
    <div>
      <Main />
      <Features />
      <AboutUs />
      <OurPartners />
      <SystemCapabilities />
      <Process />
      <Benefits />
    </div>
  );
};

export default LandingPage;
